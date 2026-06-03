const portfolioData = {
  experience: [
    {
      company: "Accenture",
      role: "Custom Software Engineering Analyst",
      duration: "Jul 2024 – Feb 2026 · 1 yr 8 mos · Pune, Hybrid",
      details: `
        Focused on backend development using .NET Core, C#, and Web APIs to build and maintain enterprise applications.
        Designed and implemented RESTful services, collaborated with cross‑functional teams in Agile environments, and contributed to performance optimization, code reviews, and microservices integration.
        Gained hands‑on experience with SQL Server, Content Manager, and Power Automate, ensuring adherence to best practices and delivering reliable solutions.
      `,
      projects: [
        { name: "Client Document Service", description: "ASP.NET Core API integrated with Power Automate for SharePoint document workflows." },
        { name: "Allianz Travel Insurance Portal", description: "B2B/B2C insurance portal using ASP.NET Core and Umbraco CMS." },
        { name: "OCP (Online Claims Portal)", description: "Standalone claims app with Angular front‑end and PL/SQL backend." },
        { name: "MIDAS", description: "Database operations with PL/SQL integrated with PRISM API for Allianz operations." }
      ]
    },
    {
      company: "Allianz Technology",
      role: "Senior Software Engineer",
      duration: "Jul 2023 – Jun 2024 · 1 yr · Pune, Hybrid",
      details: `
        Took on larger responsibilities in designing and delivering enterprise solutions with ASP.NET Core, Angular, SQL Server, and microservices architecture.
        Focused on performance optimization, code reviews, and system integration, while continuing to build scalable APIs and services.
        Gained hands‑on experience with Umbraco CMS and Octopus Deploy, contributing to modernization initiatives and ensuring best practices in software delivery.
      `,
      projects: [
        { name: "Allianz Travel Insurance Portal", description: "Maintained and enhanced portal for policy purchase and claims, reducing repeat tickets by 20%." },
		{name: "Application Support",description:"Provided production support and release management using Octopus Deploy, promoting builds from test/UAT to production. Collaborated with QA teams, resolved end‑user issues, and addressed queries while balancing development tasks"}
      ]
    },
    {
      company: "Allianz Technology",
      role: "Software Engineer",
      duration: "Jun 2021 – Jun 2023 · 2 yrs 1 mo · Pune",
      details: `
        Worked on backend and full‑stack development using ASP.NET Core, C#, Web APIs, and SQL Server.
        Contributed to building and maintaining enterprise insurance applications, ensuring scalability and reliability.
        Responsibilities included implementing RESTful services, collaborating with Agile teams, and supporting application enhancements and bug fixes.
      `,
      projects: [
        { name: "Provider Billing System", description: "Billing management modules in PL/SQL and C# for roadside assistance services." },
		{ name: "Hyundai Roadside Assistance Portal", description: "Modernized customer portal with ASP.NET MVC and Bootstrap." },
        { name: "Training Period (6 months)", description: "Participated as a <strong>Trainee Software Engineer</strong>, learning ASP.NET Core MVC and SQL Server while contributing to team projects and gaining hands‑on experience in enterprise application workflows." }
      ]
    }
  ],
  education: [
    {
      school: "Tatyasaheb Kore Institute of Engineering and Technology, Warananagar",
      degree: "Bachelor of Engineering, Computer Science & Engineering",
      duration: "July 2017 – Aug 2020 · Grade: 80.06% · First Class with Distinction",
      activities: `
        – Member of the Computer Science Society (CIS), engaging in technical discussions and peer learning.
        – Attended webinars and workshops on emerging technologies, enhancing practical knowledge beyond coursework.
      `,
      details: `
        Completed BE with a strong foundation in software development, data structures, algorithms, databases, and web technologies.
        Academic projects included Smart Cap, Call for Duty, and H/W Control Voice Assistance, which gave hands‑on experience in Machine Learning, Android development, and IoT.
      `,
      projects: [
        {
          name: "Smart Cap",
          description: "Robotic eye for blind people with voice narration of scenes. Built using Python, OpenCV, TensorFlow Lite."
        },
        {
          name: "Call for Duty",
          description: "Android app to connect workers and customers online. Developed with Android Studio."
        },
        {
          name: "H/W Control Voice Assistance",
          description: "IoT project controlling a car via voice commands using Arduino and Android app."
        }
      ]
    },
    {
      school: "Adarsh Institute of Technology, Vita",
      degree: "Diploma in Computer Technology",
      duration: "Mar 2015 – Jun 2017 · Grade: 68.18%",
      activities: `
        – Joined the Computer Science student community, engaging in peer learning and collaborative projects.
        – Completed industrial training at RacksonsIT, gaining practical exposure to industry practices.
        – Attended multiple technical workshops and seminars.
      `,
      details: `
        Diploma studies focused on programming fundamentals, database concepts, and applied software development.
        Academic project included Ayurveda Sponsor Project, a web application for publishing online journals in Ayurvedic medicine.
      `,
      projects: [
        {
          name: "Ayurveda Sponsor Project",
          description: "ASP.NET web application for publishing online journals on Ayurvedic medicine. Duration: 1 year."
        }
      ]
    }
  ],
  skills: [
    { name: ".NET Core", details: "Enterprise application development, RESTful APIs" },
    { name: "ASP.NET MVC/Web API", details: "Backend services, scalable architectures" },
    { name: "C#", details: "Advanced OOP, microservices integration" },
    { name: "SQL Server / PostgreSQL", details: "Database design, PL/SQL, performance tuning" },
    { name: "Angular", details: "Frontend development, dynamic UI" },
    { name: "JavaScript", details: "Client-side scripting" },
    { name: "Umbraco CMS", details: "Content management, portal customization" },
    { name: "Octopus Deploy", details: "Automated deployments, CI/CD pipelines" },
    { name: "Azure Fundamentals", details: "Cloud basics, AZ-900 preparation" },
    { name: "Agile Development", details: "Scrum, sprint planning, team collaboration" }
  ],
  projects: [
	{
      name: "Client Document Service",
      role: "Developer",
      duration: "Professional",
      domain: "Web API",
      technology: "ASP.NET Core, Power Automate",
      context: "Professional project at Accenture",
      details: `
        Built an API to fetch data from SharePoint and integrated it with Power Automate for efficient document retrieval. This streamlined workflows and improved productivity by 15%.
        
        The project showcased your ability to design scalable APIs and integrate enterprise tools, directly impacting client efficiency.
      `
    },
    {
      name: "Allianz Travel Insurance Portal",
      role: "Developer",
      duration: "Professional",
      domain: "Web Application",
      technology: "ASP.NET Core, Angular, Umbraco CMS",
      context: "Professional project at Allianz Technology",
      details: `
        Developed and maintained a B2B/B2C insurance portal enabling customers in Australia and New Zealand to purchase travel policies online. Leveraged ASP.NET Core, Angular, and Umbraco CMS for content management.
        
        The project improved customer experience and reduced repeat tickets by 20%, demonstrating your ability to deliver scalable, content‑driven applications.
      `
    },
    {
      name: "OCP (Online Claims Portal)",
      role: "Developer",
      duration: "Professional",
      domain: "Web Application",
      technology: "ASP.NET Core, Angular, PL/SQL",
      context: "Professional project at Allianz Technology",
      details: `
        Built a standalone web application where end users could submit travel claims during or after travel. Integrated Angular for the front‑end and PL/SQL for backend operations.
        
        This project highlighted your ability to design user‑friendly portals and handle complex data operations, ensuring smooth claim processing.
      `
    },
    {
      name: "Hyundai Roadside Assistance Portal",
      role: "Developer",
      duration: "Professional",
      domain: "Web Application",
      technology: "ASP.NET MVC, Bootstrap",
      context: "Professional project at Allianz Technology",
      details: `
        Enhanced the customer portal for Hyundai car buyers and insurance holders by upgrading functionality and modernizing the UI with ASP.NET MVC and Bootstrap.
        
        Delivered a more user‑friendly experience and improved service accessibility, showcasing your ability to modernize legacy systems.
      `
    },
    {
      name: "Smart Cap",
      role: "Developer",
      duration: "6 Months",
      domain: "Machine Learning",
      technology: "Python, OpenCV, TensorFlow Lite",
      context: "Academic project at TKIET (BE)",
      details: `
        Smart Cap was designed as a robotic eye for visually impaired individuals. The system uses computer vision to capture scenes and narrates them through voice assistance, helping blind users understand their surroundings in real time.
        
        The project leveraged Python, OpenCV, and TensorFlow Lite to process images and detect objects. This academic initiative demonstrated practical application of machine learning concepts and showcased how assistive technology can improve accessibility.
      `
    },
    {
      name: "Call for Duty",
      role: "Developer",
      duration: "6 Months",
      domain: "Android Application",
      technology: "Android Studio",
      context: "Academic project at TKIET (BE)",
      details: `
        Call for Duty was built as a smart system to connect workers and customers online. It provided a platform where users could find skilled workers and service providers quickly, reducing the gap between demand and supply.
        
        Developed using Android Studio, the project emphasized mobile application development, user interface design, and backend integration. It highlighted your ability to build practical solutions for everyday problems during your BE program.
      `
    },
    {
      name: "H/W Control Voice Assistance",
      role: "Designer",
      duration: "7 Days",
      domain: "IoT",
      technology: "Arduino, Android App",
      context: "Academic project at TKIET (BE)",
      details: `
        This short‑term IoT project focused on controlling a car using voice commands through an Android application. The system integrated Arduino hardware with mobile software to enable real‑time voice‑based control.
        
        Though small in duration, the project demonstrated your ability to quickly prototype IoT solutions and integrate hardware with software, showcasing versatility in applied engineering.
      `
    },
    {
      name: "Ayurveda Sponsor Project",
      role: "Developer",
      duration: "1 Year",
      domain: "Web Application",
      technology: "ASP.NET",
      context: "Academic project at AITP (Diploma)",
      details: `
        This project involved building an online journal publishing platform for Ayurvedic medicine. It allowed researchers and practitioners to share articles, case studies, and findings in a structured digital format.
        
        Developed using ASP.NET, the project combined web development skills with real‑world sponsorship, giving you exposure to long‑term project management and client collaboration during your diploma studies.
      `
    }
  ]
};