// src/data/projects.js

const projects = [
    {
        id: 1,
        slug: "ajs-bar-music-hall",
        title: "AJ’s Bar & Music Hall",
        description: "A full-scale event and music venue website with MongoDB, Next.js, and Tailwind CSS.",
        longDescription: "AJ’s Bar & Music Hall is a dynamic venue website featuring live event listings, admin management, and interactive image galleries. Built with Next.js and Tailwind, backed by MongoDB and GridFS for media storage.",
        images: ["/images/ajs1.png"],
    },
    {
        id: 2,
        slug: "interactive-glossary",
        title: "Interactive Glossary Application",
        description: "A Flask-powered interactive glossary with CRUD operations, MongoDB, and GridFS image handling.",
        longDescription: "This glossary tool supports full CRUD operations, rich text formatting, image uploads, and search/filtering features. Built in Flask with MongoDB Atlas, styled with Bootstrap and enhanced with Quill.js.",
        images: [ "/images/glossary-demo1.gif",
            "/images/glossary-demo2.gif"],
        link: "https://github.com/LauraChipman/Glossary",
    },
    {
        id: 3,
        slug: "portfolio-website",
        title: "Portfolio Website",
        description: "A personalized portfolio website showcasing my skills, built with Next.js and Tailwind CSS.",
        longDescription: "My portfolio website reflects my development journey and aesthetic. It includes retro CRT-inspired UI elements, project showcases, and interactive sections. Built with Next.js and Tailwind CSS.",
        link: "https://laurachipmandesigns.com",
    },
];

export default projects;
