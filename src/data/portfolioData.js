export const portfolioData = {
  profile: {
    name: "Mark Kevin Pili",
    role: "Computer Engineering Student",
    location: "Tanauan City College",
    graduation: "Batch 2023 - 2027",
    email: "markkevinpili22@gmail.com",
    facebook: "https://www.facebook.com/kevin.pili.556977",
    whatsapp: "https://wa.me/639916969016",
    github: "https://github.com/kevzpili2",
    linkedin: "#",
    description: "Designing hardware. Optimizing software. I'm a Computer Engineering student specializing in Full-Stack Web Development, bridging the gap between complex hardware and intuitive web solutions."
  },
  skills: [
    { 
      category: "Frontend Development", 
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5/CSS3"] 
    },
    { 
      category: "Backend & Database", 
      items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "RESTful APIs", "JWT Auth", "Firebase"] 
    },
    { 
      category: "Design & Tools", 
      items: ["Figma", "Git/GitHub", "Docker", "Postman", "Vercel", "Jest", "Responsive Design"] 
    }
  ],
  projects: [
    {
      id: 1,
      title: "Noise Controller App",
      description: "A specialized web application designed for noise level management. Built with advanced audio processing APIs to provide real-time environment monitoring and feedback.",
      tags: ["React", "Web Audio API", "Tailwind CSS", "JavaScript"],
      liveLink: "https://github.com/kevzpili2/noise-controller-app",
      githubLink: "https://github.com/kevzpili2/noise-controller-app",
      type: "audio"
    },
    {
      id: 2,
      title: "Modern Portfolio Engine",
      description: "A high-performance personal landing page and repository. Optimized for SEO and core web vitals, showcasing professional web engineering skills and responsive design patterns.",
      tags: ["Next.js", "GitHub Pages", "Responsive Design", "UI/UX"],
      liveLink: "https://kevzpili2.github.io/my-portfolio/",
      githubLink: "https://github.com/kevzpili2/my-portfolio",
      type: "web"
    },
    {
      id: 3,
      title: "E-Commerce Dashboard",
      description: "A full-stack administrative interface featuring real-time data visualization, inventory management, and secure user authentication flows.",
      tags: ["Node.js", "Express", "MongoDB", "Chart.js"],
      liveLink: "#",
      githubLink: "https://github.com/kevzpili2",
      type: "dashboard"
    }
  ],
  certifications: [
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "April 14, 2026",
      certId: "d50be2a5-90a0-43ee-86c7-e42159e019c0",
      description: "Mastered fundamental networking concepts essential for full-stack deployment and server-client architecture."
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description: "Learned core security principles for building protected and resilient web applications."
    }
  ]
};
