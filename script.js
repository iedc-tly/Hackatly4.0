
window.onload = function () {
    const entryElements = $('.slider-item');
    let entryIndex = 0;

    $('.sp_right').click(function () {
        //change the number below if u added more sponsors
        if (entryIndex != 2) {
            entryIndex++;
            entryElements.hide();
            $(entryElements[entryIndex]).fadeIn(1000);
        }
    });

    $('.sp_left').click(function () {
        if (entryIndex != 0) {
            entryIndex--;
            entryElements.hide();
            $(entryElements[entryIndex]).fadeIn(1000);
        }
    });

    const entryElements1 = $('.slider-item1');
    let entryIndex1 = 0;

    $('.mp_right').click(function () {
        //change the number below if u added more media partners
        if (entryIndex1 != 2) {
            entryIndex1++;
            entryElements1.hide();
            $(entryElements1[entryIndex1]).fadeIn(1000);
        }
    });

    $('.mp_left').click(function () {
        if (entryIndex1 != 0) {
            entryIndex1--;
            entryElements1.hide();
            $(entryElements1[entryIndex1]).fadeIn(1000);
        }
    });
}

$(document).ready(function () {
    function checkLazyLoading() {
        // check elements that are still hidden
        $('.lazyload').each(function (i) {
            // middle of object and current viewport
            var
                middle = $(this).offset().top + ($(this).outerHeight() / 4),
                top = $(window).scrollTop(),
                bottom = top + $(window).height()
                ;

            // if the object is half visibile, show it
            if (top < middle && middle < bottom) {
                $(this)
                    // remove class, since we're already loading this element
                    .removeClass('lazyload')
                    // animate to visibile
                    .animate({ 'opacity': '1' }, 500)
                    ;
            }
        });
    }

    // @see http://ejohn.org/blog/learning-from-twitter/
    var scrollHappened = false;
    $(window).scroll(function () {
        scrollHappened = true;
    });
    setInterval(function () {
        if (scrollHappened) {
            scrollHappened = false;
            checkLazyLoading();
        }
    });
});

function scrollResults(direction) {
    const container = document.getElementById('resultsContainer');
    const scrollAmount = 100; // Adjust this value to control scroll speed

    if (direction === 'up') {
        container.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Auto-scroll functionality
function autoScroll() {
    const container = document.getElementById('resultsContainer');
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    const maxScroll = scrollHeight - clientHeight;

    // If we're at the bottom, scroll back to top
    if (container.scrollTop >= maxScroll) {
        container.scrollTop = 0;
    } else {
        container.scrollBy({
            top: 1, // Scroll by 1 pixel for smooth movement
            behavior: 'auto'
        });
    }
}

// Global variables
let teamData = [];
let scrollInterval;

// Load team and college data
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('phase1Win.json');
        teamData = await response.json();

        if (!teamData || teamData.length === 0) {
            console.error('No data found in JSON file');
            return;
        }

        updateResultsList(teamData);

        // Initialize auto-scroll after data is loaded
        const resultsContainer = document.getElementById('resultsContainer');

        resultsContainer.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        resultsContainer.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 30);
        });

        // Start initial auto-scroll
        scrollInterval = setInterval(autoScroll, 30);

    } catch (error) {
        console.error('Error loading JSON file:', error);
        // Fallback data in case of error
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = `
            <li>🏆 Team Innovators - College of Engineering Trivandrum</li>
            <li>🏆 Tech Wizards - Government Engineering College Thrissur</li>
            <li>🏆 Code Masters - TKM College of Engineering</li>
            <li>🏆 Binary Brigade - NSS College of Engineering</li>
            <li>🏆 Digital Dynamos - Model Engineering College</li>
            <li>🏆 Cyber Knights - College of Engineering Chengannur</li>
        `;
    }

    const cards = document.querySelectorAll('.theme-card');
    const modal = document.getElementById('popupModal');

    // Safety check if elements exist
    if (!modal) return;

    const modalContent = modal.querySelector('.modal-content');

    // Ensure modal is hidden initially
    modal.style.display = 'none';

    cards.forEach(card => {
        card.addEventListener('click', function () {
            // Updated to look for h3 in the new structure
            const titleEl = card.querySelector('h3');
            if (titleEl) {
                const cardTitle = titleEl.textContent.toLowerCase();
                updateModalContent(cardTitle);
                modal.style.display = 'flex';
            }
        });
    });

    if (modal) {
        // Close modal when clicking outside
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Close modal when clicking close button
        const closeButton = modal.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                modal.style.display = 'none';
            });
        }
    }

    function updateModalContent(cardTitle) {
        // Clear existing content
        modalContent.innerHTML = '<span class="close-button">&times;</span>';

        // Add new content based on the card title
        switch (cardTitle.toLowerCase()) {
            case 'robotics':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>A1. Efficient Robot Task Optimization</h3>
                    <p>Develop innovative solutions that optimize task allocation, execution, and adaptation for robots in various environments, ensuring maximum efficiency, productivity, and resource utilization.</p>
                    
                    <h3>A2. Robust Robot Perception and Understanding</h3>
                    <p>Create groundbreaking approaches that enhance robot perception, understanding, and interpretation of complex environments, objects, and situations, enabling informed decision-making and effective action.</p>
                    
                    <h3>A3. Scalable Robot Swarms for Real-World Applications</h3>
                    <p>Design innovative solutions that facilitate the development, deployment, and management of large-scale robot swarms, ensuring efficient coordination, communication, and collaboration to tackle complex real-world challenges.</p>
                `;
                break;
            case 'tourism':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>B1. Empowering Network Freedom</h3>
                    <p>Develop innovative solutions that grant users seamless control, awareness, and optimization of their network connectivity, ensuring fast, secure, and reliable access anywhere, anytime.</p>

                    <h3>B2. Revolutionizing Waste Management in Tourism</h3>
                    <p>Create cutting-edge solutions that encourage responsible waste behavior among tourists, promoting a cleaner and more sustainable environment without relying on traditional enforcement methods.</p>

                    <h3>B3. Personalized Travel Experience of the Future</h3>
                    <p>Develop solutions that provide personalized, immersive, and accessible travel experiences, connecting travelers with local cultures, hidden gems, and unique activities that match their interests and preferences.</p>
                `;
                break;
            case 'smart vehicle':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>C1. Revolutionizing Daily Commutes</h3>
                    <p>Design innovative solutions that prioritize safety, efficiency, and enjoyment, while tackling the complexities of crowded city roads.</p>

                    <h3>C2. Sustainable Transportation Evolution</h3>
                    <p>Pioneer environmentally conscious transportation solutions that minimize the ecological footprint while elevating the driving experience.</p>

                    <h3>C3. Intelligent Vehicle Safety Net</h3>
                    <p>Create proactive safety solutions that anticipate and respond to potential accidents, harnessing data and real-time insights to prevent collisions and save lives.</p>

                `;
                break;
            case 'energy and environment':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>D1. Revolutionizing Energy Efficiency</h3>
                    <p>Create solutions to minimize energy waste and optimize consumption in households and industries using advanced technologies to reduce costs and environmental impact.</p>

                    <h3>D2. Integrated Home Energy Harvesting</h3>
                    <p>Design energy generation systems combining multiple renewable sources, offering real-time monitoring and optimization for households.</p>

                    <h3>D3. Solar Energy Continuity</h3>
                    <p>Develop solutions for uninterrupted solar energy availability, addressing nighttime and peak demand challenges with innovative storage and management.</p>

                `;
                break;
            case 'fitness':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>E1. Energy-Harvesting Smart Gym Equipment</h3>
                    <p>Develop gym machines that convert user energy into electricity, integrate AI for optimization, and track individual contributions via a dashboard.</p>

                    <h3>E2. AI-Powered Mental Fitness Gym</h3>
                    <p>Create a virtual gym platform combining physical fitness with mental wellness, incorporating AI to monitor health and recommend personalized fitness plans.</p>

                    <h3>E3. Smart Gym Equipment Maintenance System</h3>
                    <p>Develop systems for real-time monitoring and predictive maintenance of gym equipment using sensors to reduce energy consumption and improve infrastructure longevity.</p>

                `;
                break;
            case 'med-tech':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>F1. Medication Adherence Revolution</h3>
                    <p>Create solutions that empower patients to manage their medication, ensuring better adherence and improved outcomes.</p>

                    <h3>F2. Biobank Optimization</h3>
                    <p>Design solutions to harmonize workflows, enable real-time insights, and preserve sample integrity in biobank operations.</p>

                    <h3>F3. Predictive Patient Monitoring</h3>
                    <p>Develop solutions that analyze real-time data to anticipate and prevent hospitalizations, improving patient outcomes.</p>

                `;
                break;
            case 'agriculture':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>G1. Revolutionizing Red Palm Weevil Detection</h3>
                    <p>Innovate early detection systems for Red Palm Weevil infestations in coconut trees, helping farmers prevent severe crop damage.</p>

                    <h3>G2. Precision Crop Nutrition</h3>
                    <p>Develop systems to predict nutrient deficiencies via leaf color analysis, allowing real-time detection and correction to optimize yields and sustainability.</p>

                    <h3>G3. Smart Contract Farming Ecosystems</h3>
                    <p>Design ecosystems that enable collaboration, transparency, and mutual benefits among farmers, buyers, and stakeholders, including features like real-time communication and data-driven decision-making for sustainable agriculture.</p>

                `;
                break;
            case 'cybersecurity':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>H1. Secure Immersive Experiences</h3>
                    <p>Develop solutions to protect VR/AR users from cyber threats.</p>

                    <h3>H2. Protect Global Supply Chain Integrity</h3>
                    <p>Create solutions to secure supply chains, ensuring authenticity, quality, and safety of goods.</p>

                    <h3>H3. Safeguard Environmental Monitoring</h3>
                    <p>Develop solutions to protect environmental monitoring systems from cyber threats.</p>
                `;
                break;
            case 'disaster management':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>I1. Landslide Prediction and Mitigation</h3>
                    <p>Develop accurate and timely landslide prediction models using machine learning, deep learning, and remote sensing to create interactive maps.</p>

                    <h3>I2. Preventing and Mitigating Transportation-Related Emergencies</h3>
                    <p>Design innovative solutions to enhance the safety and resilience of transportation systems, reducing risks and impacts from emergencies such as accidents, natural disasters, and infrastructure failures.</p>

                    <h3>I3. Disaster-Resilient Infrastructure</h3>
                    <p>Design adaptive infrastructure systems capable of real-time detection, response, and recovery from disasters, ensuring public safety and minimizing economic losses.</p>

                `;
                break;
            case 'education':
                modalContent.innerHTML += `
                    <h2>Problem Statements</h2>
                    <h3>J1. Empower Equal Access to Education</h3>
                    <p>Design a universally accessible digital learning platform for students with disabilities, promoting inclusivity and equal opportunities.</p>

                    <h3>J2. Unlock Every Student's Potential</h3>
                    <p>Create solutions for personalized learning experiences, adapting to individual learning styles and abilities.</p>

                    <h3>J3. Connect Rural Communities to Quality Education</h3>
                    <p>Develop solutions to bridge education gaps in rural areas, providing equal opportunities for growth and success.</p>
                `;
                break;
            default:
                modalContent.innerHTML += `
                    <h2>${cardTitle.charAt(0).toUpperCase() + cardTitle.slice(1)}</h2>
                    <p>More information about this theme will be available soon.</p>
                `;
        }
    }
});

function updateResultsList(data) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Clear existing items

    data.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `🏆 ${item['TEAM']} - ${item['COLLEGE']}`;
        resultsList.appendChild(li);
    });

    // If no valid entries were added
    if (resultsList.children.length === 0) {
        resultsList.innerHTML = '<li>No valid entries found</li>';
    }
}

// Modal functions
function openModal() {
    const modal = document.getElementById('listModal');
    const completeList = document.getElementById('completeList');

    if (modal && completeList) {
        // Clear existing items
        completeList.innerHTML = '';

        // Copy items from the global teamData
        teamData.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = `🏆 ${item['TEAM']} - ${item['COLLEGE']}`;
            completeList.appendChild(li);
        });

        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('listModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function openParticipantsModal() {
    const modal = document.getElementById('participantsModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeParticipantsModal() {
    const modal = document.getElementById('participantsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Hide all modals initially
    const participantsModal = document.getElementById('participantsModal');
    const popupModal = document.getElementById('popupModal');
    const listModal = document.getElementById('listModal');

    if (participantsModal) {
        participantsModal.style.display = 'none';
    }
    if (popupModal) {
        popupModal.style.display = 'none';
    }
    if (listModal) {
        listModal.style.display = 'none';
    }

    // Close modals when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === participantsModal) {
            participantsModal.style.display = 'none';
        }
        if (event.target === listModal) {
            listModal.style.display = 'none';
        }
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });

    // Add escape key listener to close modals
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (participantsModal) participantsModal.style.display = 'none';
            if (popupModal) popupModal.style.display = 'none';
            if (listModal) listModal.style.display = 'none';
        }
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when clicking a link
        navbarMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });

    // Legacy Sliders Logic (Restored)

    // 1. Precious Hackathon Slider (.mySlides)
    let slideIndex = 0;
    const legacySlides1 = document.querySelectorAll(".mySlides");
    if (legacySlides1.length > 0) {
        function showSlides() {
            for (let i = 0; i < legacySlides1.length; i++) {
                legacySlides1[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > legacySlides1.length) { slideIndex = 1 }
            legacySlides1[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000);
        }
        showSlides();
    }

    // 2. Our History Slider (.mySlides1)
    let myIndex = 0;
    const legacySlides2 = document.querySelectorAll(".mySlides1");
    if (legacySlides2.length > 0) {
        function carousel2() {
            for (let i = 0; i < legacySlides2.length; i++) {
                legacySlides2[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > legacySlides2.length) { myIndex = 1 }
            legacySlides2[myIndex - 1].style.display = "block";
            setTimeout(carousel2, 2500);
        }
        carousel2();
    }

    // 3. Legacy of IEDC Slider (.mySlideslegacy)
    let currentSlide = 0;
    const legacySlides3 = document.querySelectorAll(".mySlideslegacy");
    if (legacySlides3.length > 0) {
        function nextSlide() {
            legacySlides3[currentSlide].style.display = "none";
            currentSlide++;
            if (currentSlide >= legacySlides3.length) {
                currentSlide = 0;
            }
            legacySlides3[currentSlide].style.display = "block";
        }
        setInterval(nextSlide, 3000);
    }

    // Scroll Animation for .fade_in elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade_in').forEach(el => {
        observer.observe(el);
    });

    // Hero Background Image Slideshow (right-to-left)
    const heroSlides = document.querySelectorAll('.hero-bg-slide');
    if (heroSlides.length > 1) {
        let currentHeroSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function nextHeroSlide() {
            const current = heroSlides[currentHeroSlide];
            // Mark current as sliding out to the left
            current.classList.remove('active');
            current.classList.add('slide-out');

            // Move to next slide
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            const next = heroSlides[currentHeroSlide];

            // Reset position (place at right, off-screen)
            next.classList.remove('slide-out');
            // Force reflow so transition fires
            next.style.transition = 'none';
            next.style.transform = 'translateX(100%)';
            next.style.opacity = '0';
            void next.offsetWidth; // trigger reflow
            next.style.transition = '';
            next.style.transform = '';
            next.style.opacity = '';

            // Activate next slide (slides in from right)
            next.classList.add('active');

            // Clean up previous slide after transition
            setTimeout(() => {
                current.classList.remove('slide-out');
            }, 1300);
        }

        setInterval(nextHeroSlide, slideInterval);
    }

    // Scroll Animation for Legacy Cards
    const legacyCards = document.querySelectorAll('.legacy-card');
    function handleLegacyScroll() {
        legacyCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isInViewport = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            if (isInViewport) {
                card.classList.add('zoom-in');
            }
        });
    }
    window.addEventListener('scroll', handleLegacyScroll);

    // =========================================
    // PARTICIPANTS & WINNERS TABLE
    // =========================================
    const tableBody = document.getElementById('tableBody');
    const searchInput = document.getElementById('teamSearch');
    const noResults = document.getElementById('noResults');
    const tabBtns = document.querySelectorAll('.tab-btn');

    let currentTab = 'participants';

    function getCurrentData() {
        if (currentTab === 'participants') {
            return (typeof participantsData !== 'undefined') ? participantsData : [];
        } else {
            return (typeof winnersData !== 'undefined') ? winnersData : [];
        }
    }

    function renderTable(data) {
        if (!tableBody) return;
        tableBody.innerHTML = '';

        if (data.length === 0) {
            if (noResults) noResults.style.display = 'block';
            return;
        }
        if (noResults) noResults.style.display = 'none';

        data.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td><strong>${item.team}</strong></td>
                <td>${item.lead}</td>
                <td>${item.college}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    function filterAndRender() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let data = getCurrentData();

        if (query) {
            data = data.filter(item =>
                item.team.toLowerCase().includes(query) ||
                item.lead.toLowerCase().includes(query) ||
                item.college.toLowerCase().includes(query)
            );
        }

        renderTable(data);
    }

    // Tab switching
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTab = btn.dataset.tab;
                if (searchInput) searchInput.value = '';
                filterAndRender();
            });
        });
    }

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', filterAndRender);
    }

    // Initial render
    filterAndRender();
});
