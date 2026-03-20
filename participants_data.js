const participantsData = [
  {
    "team": "PHOENIX_A",
    "lead": "Naveen S Thomas",
    "college": "Christ College of Engineering"
  },
  {
    "team": "Hackatz",
    "lead": "Hridwick",
    "college": "GECT"
  },
  {
    "team": "SHS CREATIONS",
    "lead": "Shravana H S",
    "college": "Dayananda Sagar Academy of Technology and Management"
  },
  {
    "team": "Baatein1",
    "lead": "Fathima zeba samir",
    "college": "College of Engineering,Thalassery"
  },
  {
    "team": "CircuitGuild.exe",
    "lead": "Hariharan A",
    "college": "Velammal Engineering College, Chennai"
  },
  {
    "team": "VJIM",
    "lead": "Vishal Jaison",
    "college": "Vimal Jyothi Institute of Management and Research"
  },
  {
    "team": "Hacky chan",
    "lead": "Anushree Devadas",
    "college": "Mar Athanasius college of engineering"
  },
  {
    "team": "EUPHORIA",
    "lead": "Sakhil N Maju",
    "college": "Adi Shankara Institute of Engineering and Technology"
  },
  {
    "team": "INDRA",
    "lead": "Aman Muhammed A",
    "college": "Cochin University of science and technology"
  },
  {
    "team": "Urban Xtreme",
    "lead": "Sreehari S",
    "college": "College of Engineering Attingal"
  },
  {
    "team": "Carboncrew",
    "lead": "SURYA S",
    "college": "HINDUSTAN COLLEGE OF ENGINEERING AND TECHNOLOGY, COIMBATORE -641032"
  },
  {
    "team": "Levantate Labs",
    "lead": "Soorya Krishna P R",
    "college": "Christ College of Engineering, Irinjalakuda"
  },
  {
    "team": "404.0",
    "lead": "Geo Mathew",
    "college": "Amal Jyothi College of Engineering"
  },
  {
    "team": "Fantastic Four",
    "lead": "Amrutha M",
    "college": "CUSAT"
  },
  {
    "team": "Innovators",
    "lead": "Kripa E Mathew",
    "college": "Muthoot Institute of Technology and Science, Varikoli"
  },
  {
    "team": "Hyphen",
    "lead": "Abi Alif",
    "college": "ACE College Of Engineering"
  },
  {
    "team": "Anas._.4x",
    "lead": "B.Nikilaesh",
    "college": "PSG I tech and applied research"
  },
  {
    "team": "Strawhats",
    "lead": "Ebin Amson",
    "college": "SOE,CUSAT"
  },
  {
    "team": "Glitch",
    "lead": "Safeena K S",
    "college": "Muthoot Institute of Technology and Science"
  },
  {
    "team": "Mitochondria",
    "lead": "Rio Roy",
    "college": "CUSAT"
  },
  {
    "team": "Allied",
    "lead": "Devadathan C",
    "college": "MES College of Engineering Kuttipuram"
  },
  {
    "team": "HERizon",
    "lead": "Swathi H Nair",
    "college": "TocH Institution of Science and Technology"
  },
  {
    "team": "RLR",
    "lead": "Rohan R Mathew",
    "college": "MA College of Engineering"
  },
  {
    "team": "BroCode",
    "lead": "Abhin M Raj",
    "college": "College of engineering Muttathara"
  },
  {
    "team": "Innov8",
    "lead": "Naveen Ravi",
    "college": "TocH Institute Of Science And Technology"
  },
  {
    "team": "Pasu_Labs",
    "lead": "Madhav K Anil",
    "college": "Mar Athanasius College of engineering Kothamangalam"
  },
  {
    "team": "Ad Edu",
    "lead": "Mohamed Asif",
    "college": "MES College of Engineering Kuttipuram"
  },
  {
    "team": "YatraLive",
    "lead": "Krishnanand. A",
    "college": "College of Engineering Chengannur"
  },
  {
    "team": "Imposter",
    "lead": "Krishna",
    "college": "College of engineering Chengannur"
  },
  {
    "team": "IMPOSTERS",
    "lead": "Hena Mariam Abraham",
    "college": "College Of Engineering Chengannur"
  },
  {
    "team": "farm fit",
    "lead": "MUHAMMED AMAN",
    "college": "N A M COLLEGE KALLIKKANDY"
  },
  {
    "team": "Samurai",
    "lead": "Sangeeth karunakaran",
    "college": "Cochin university of science and technology"
  },
  {
    "team": "IMPOSTERS",
    "lead": "Hena Mariam Abraham",
    "college": "College of Engineering Chengannur"
  },
  {
    "team": "Axiom",
    "lead": "Greeshma Susan Lukose",
    "college": "Government engineering College Barton hill"
  },
  {
    "team": "AMONGUS",
    "lead": "KRISHNA B",
    "college": "College of engineering Chengannur"
  },
  {
    "team": "Visionarc",
    "lead": "Arya Vijayan",
    "college": "Sree narayana guru college of engineering and technology payyanur kannur"
  },
  {
    "team": "Mohammed Asif",
    "lead": "Muhammed zayan",
    "college": "MES college of Engineering Kuttippuram"
  },
  {
    "team": "galaxy",
    "lead": "rahil",
    "college": "ihub"
  },
  {
    "team": "Champs",
    "lead": "Mariya maliyekkal shaju",
    "college": "College of veterinary and animal sciences, mannuthy"
  },
  {
    "team": "Trihikers",
    "lead": "Nishan EV",
    "college": "College of engineering thalassery"
  },
  {
    "team": "Xplore",
    "lead": "Najiya Nazrin C N",
    "college": "Mar Athanasius college of engineering kothamangalam"
  },
  {
    "team": "Irfana Davood",
    "lead": "Irfana Davood",
    "college": "TKM IT"
  },
  {
    "team": "Mechbeasts",
    "lead": "Karthik V S",
    "college": "Government Engineering College Thrissur"
  },
  {
    "team": "Asthra",
    "lead": "Nidha",
    "college": "Cce"
  },
  {
    "team": "Syntax",
    "lead": "Krishnendu TN",
    "college": "Government engineering college kozhikode"
  },
  {
    "team": "Kochi bytes",
    "lead": "Hari",
    "college": "ASIET"
  },
  {
    "team": "Vanguard",
    "lead": "Navaneeth k  Shajil",
    "college": "Muthoot Institute of Technology & Science"
  },
  {
    "team": "Code Crew",
    "lead": "Arfaan Fasal",
    "college": "IES COLLEGE OF ENGINEERING"
  },
  {
    "team": "MECrookies",
    "lead": "Adeeb K J",
    "college": "Govt Model Engineering College"
  },
  {
    "team": "NEXORA",
    "lead": "Abhinandana Susheel",
    "college": "Malabar Institute of Technology,kannur"
  },
  {
    "team": "CodeBlooded",
    "lead": "Devadathan M R",
    "college": "Mar Athanasius College of Engineering Kothamangalam"
  },
  {
    "team": "Byte",
    "lead": "Muhammed Shiyad C",
    "college": "Malabar Institute of Technology (MIT),Anjarakkandy,Kannur,Kerala"
  },
  {
    "team": "VANTAGE",
    "lead": "Cheriyan K Cheriyan",
    "college": "VJCET"
  },
  {
    "team": "NEXUS",
    "lead": "SUFIYAN ABDUL SALAM",
    "college": "College of Engineering Thalassery"
  },
  {
    "team": "Circuit breakers",
    "lead": "ABHEERASREE K S",
    "college": "Model Engineering college Thrikkakara"
  },
  {
    "team": "Echolon",
    "lead": "Siddharth k Nair",
    "college": "Jyothi Engineering College"
  },
  {
    "team": "Delusion",
    "lead": "Devi Manoj",
    "college": "SJCET PALAI"
  },
  {
    "team": "Prismwise",
    "lead": "Mohammed Finaz M F",
    "college": "Jyothi Engineering college"
  },
  {
    "team": "HOPE INT CORE",
    "lead": "Hari Nandan K",
    "college": "Ies College of engineering"
  },
  {
    "team": "Christy Biju",
    "lead": "Christy Biju",
    "college": "Christ"
  },
  {
    "team": "Obsidian",
    "lead": "Athuljith Vasudev",
    "college": "Christ College of Engineering"
  },
  {
    "team": "Astraflare",
    "lead": "Abhyuday T M",
    "college": "Mar athanasius college of engineering"
  },
  {
    "team": "Multimeter",
    "lead": "Basil Mathews Biju",
    "college": "Muthoot Institute of Technology and Science"
  },
  {
    "team": "Enigma",
    "lead": "Sreehari A Nair",
    "college": "College of engineering Chengannur"
  },
  {
    "team": "Uno",
    "lead": "Fathima Safa MK",
    "college": "College of Engineering Thalassery"
  },
  {
    "team": "Team Snakezz",
    "lead": "Sarin M S",
    "college": "College of Engineering Chengannur"
  },
  {
    "team": "Heckers",
    "lead": "Rinjanlal K L",
    "college": "Mar athanasius college of engineering kothamangalam"
  },
  {
    "team": "Error404",
    "lead": "Karthik V R",
    "college": "Model Engineering College Thrikkakara"
  },
  {
    "team": "Mechatronics",
    "lead": "SAFDAR HASHMI P A",
    "college": "JYOTHI ENGINEERING COLLEGE(AUTONOMOUS)CHERUTHURUTHY,THRISSUR"
  },
  {
    "team": "Byte Builders",
    "lead": "Adith",
    "college": "Mar Athanasius College of Engineering"
  },
  {
    "team": "Error404",
    "lead": "Ameena Parvin PL",
    "college": "Model Engineering College Thrikkakara"
  },
  {
    "team": "Circuit Breakers",
    "lead": "Abhijith A",
    "college": "College of Engineering Thalassery"
  },
  {
    "team": "Codex",
    "lead": "Abhishek T K",
    "college": "Mar athanasius college of engineering kothamangalam"
  },
  {
    "team": "PRIME",
    "lead": "Nirmal C George",
    "college": "Jyothi Engineering College"
  },
  {
    "team": "Singularity",
    "lead": "Nevin K Raju",
    "college": "MACE Kothamangalam"
  },
  {
    "team": "Techies",
    "lead": "K Filsha",
    "college": "COET"
  },
  {
    "team": "KAPITHAN",
    "lead": "Andrewjos Sebastian",
    "college": "Saint Gits College of Engineering"
  },
  {
    "team": "A Square",
    "lead": "Abhijith A A",
    "college": "Saintgits college of engineering"
  },
  {
    "team": "MECPookiesss",
    "lead": "Adeeb K J",
    "college": "Govt Model Engineering College"
  },
  {
    "team": "InsightX",
    "lead": "Jenin Cheriyan",
    "college": "RIT, Kottayam"
  },
  {
    "team": "Team sura",
    "lead": "Sooraj N S",
    "college": "mar athanasius college of engineering kothamanagalam"
  },
  {
    "team": "Xyra",
    "lead": "Rahil rahees",
    "college": "Ihub"
  },
  {
    "team": "Ignite",
    "lead": "JAISY SUNIL",
    "college": "Cochin University of Science and Technology"
  },
  {
    "team": "Codiac",
    "lead": "Ashin Aji",
    "college": "Santhigiri College of Computer science"
  },
  {
    "team": "Codiac",
    "lead": "Mathew Jolly",
    "college": "Santhigiri college Vazhithala"
  },
  {
    "team": "Team Zero Limits",
    "lead": "Athif muhammed",
    "college": "Carmel Polytechnic College Alappuzha"
  },
  {
    "team": "Gengears Tech",
    "lead": "G B GOKUL KANNAN",
    "college": "AMRITA VISHWA VIDYAPEETHAM, NAGERCOIL"
  },
  {
    "team": "Defendx",
    "lead": "Mamtha Shaji",
    "college": "Government Engineering College Thrissur"
  },
  {
    "team": "Team midhun",
    "lead": "Agin Roshan MP",
    "college": "Mar athanasius college of engineering"
  },
  {
    "team": "Hackstorm",
    "lead": "Arsha Vinod uni",
    "college": "St. Thomas college Ranni"
  },
  {
    "team": "404.0",
    "lead": "Abhinav S Nair",
    "college": "Model Engineering College"
  },
  {
    "team": "Swineshield",
    "lead": "Sooraj Vs",
    "college": "Government Polytechnic Chelakkara"
  }
];
