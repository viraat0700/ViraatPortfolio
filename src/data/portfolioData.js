export const portfolioData = {
    personalInfo: {
        name: "Viraat Shrivastava",
        title: "Full Stack Developer",
        email: "viraat.shrivastava0700@gmail.com",
        phone: "+91 7007242132",
        linkedin: "https://linkedin.com/in/viraat-shrivastava-6b9571163",
        github: "https://github.com/viraat0700",
        bio: "Full Stack Developer with experience in building responsive React.js frontends and robust Spring Boot backends. Passionate about creating efficient, scalable, and user-friendly applications."
    },
    experience: [
        {
            company: "WorkNovas",
            role: "Full Stack Developer",
            duration: "March 2025 – Present",
            description: [
                "Built responsive and accessible React.js frontends using Material UI, improving user engagement and cross-device compatibility.",
                "Developed and integrated RESTful APIs with Spring Boot backend, enabling smooth and dynamic UI updates with real-time data.",
                "Designed reusable components and layouts to ensure consistent user experience and faster feature rollout.",
                "Implemented Redux/Context API for managing application state efficiently, improving performance on high-interaction pages.",
                "Automated builds and deployments with GitHub Actions, reducing manual release effort and increasing delivery speed by 50%."
            ]
        },
        {
            company: "Veltris",
            role: "Software Developer Intern",
            duration: "April 2024 – February 2025",
            description: [
                "Created internal React.js dashboards for visualizing Kubernetes resource states, improving monitoring and issue resolution speed.",
                "Contributed to UI components that interfaced with CRDs, helping teams interact with complex Kubernetes operators visually.",
                "Migrated Helm deployments to Golang-based operators, adding self-healing and backup features with minimal manual input.",
                "Integrated frontend with Kubernetes APIs for real-time updates on application health and resource changes.",
                "Reduced operational overhead by 70% through automation and reconciliation logic, with UI visibility aiding faster debugging.",
                "Authored clear and comprehensive documentation, enabling faster team onboarding and seamless handover for operator maintenance.",
                "Enhanced production readiness and operational stability by shifting from static Helm deployments to dynamic, event-driven operators."
            ]
        }
    ],
    projects: [
        {
            title: "Online Bidding Platform",
            date: "March 2025",
            tech: "React.js, Node.js, Spring Boot, MongoDB",
            description: [
                "Created a real-time auction platform with secure user auth and bidding dashboard.",
                "Built using React.js, Node.js, Spring Boot, and MongoDB."
            ],
            link: ""
        },
        {
            title: "QKart Frontend",
            date: "January 2024",
            tech: "React.js, Material-UI, Express.js, MongoDB",
            description: [
                "Developed secure JWT authentication with persistent sessions and built interactive cart/checkout system (login/signup, add/remove items, dynamic pricing, API integration).",
                "Implemented RESTful API integration with Express.js/MongoDB backend and responsive Material-UI frontend (product display, themed grids, mobile-friendly design).",
                "Deployed full-stack solution using Vercel (frontend) and Render (backend)."
            ],
            link: "https://qkartfrontendviraat.vercel.app/"
        },
        {
            title: "Bank Management System",
            date: "July 2024",
            tech: "Java Spring Boot, MongoDB, Spring Security",
            description: [
                "Developed a Bank Management System with RESTful APIs using Spring Boot and MongoDB, enabling account creation, fund transfers, and transaction history with Spring Data MongoDB for efficient document-based data storage.",
                "Implemented secure API endpoints with Spring Security and JWT, ensuring authorized access and robust error handling."
            ],
            link: "https://bank-m-s.onrender.com/swagger-ui/index.html"
        }
    ],
    skills: {
        languages: ["Golang", "HTML", "CSS", "JavaScript", "Typescript", "Java"],
        frameworks: ["React.js", "Node.js", "Express.js", "MongoDB", "Spring Boot", "Kubernetes Operator-SDK"],
        devOps: ["Git", "VS Code", "Linux", "Docker", "Kubernetes"],
        additional: ["HTTP", "REST", "Bootstrap", "Postman"]
    },
    education: [
        {
            degree: "Master of Computer Application",
            institution: "Amity University Lucknow",
            year: "2022 – 2024"
        },
        {
            degree: "Bachelor of Computer Application",
            institution: "Amity University Lucknow",
            year: "2018 – 2021"
        }
    ]
};
