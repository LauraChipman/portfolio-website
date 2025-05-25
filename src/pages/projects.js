import Link from 'next/link';
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const projects = [
    {
        id: 1,
        title: 'AJ’s Bar & Music Hall',
        description: 'A full-scale event and music venue website with MongoDB, Next.js, and Tailwind CSS.',
        link: '/projects/ajs-bar-music-hall'
    },
    {
        id: 2,
        title: 'Interactive Glossary Application',
        description: 'A Flask-powered interactive glossary with CRUD operations, MongoDB, and GridFS image handling.',
        link: 'https://github.com/LauraChipman/Glossary'
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A personalized portfolio website showcasing my skills, built with Next.js and Tailwind CSS.',
        link: '/projects/portfolio-website'
    }
];



export default function Projects() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-900 text-white">
            <div className="flex-grow">
                <h1 className="projects-text text-5xl mb-10 text-green-500 font-mono">[ MY PROJECTS ]</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-5xl">
                    {projects.map((project) => (
                        <Link
                            href={project.link}
                            key={project.id}
                            className="projects-container bg-slate-800 p-6 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg no-underline border-none"
                        >
                            <h2 className="project-title text-2xl mb-2">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </Link>
                    ))}
                </div>
                <div
                    className=" right-8 bg-slate-800 text-green-500 font-mono px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer shadow-lg border border-green-500"
                    onClick={() => router.push("/")}
                >
                    ◀◀◀◀ Back to Home
                </div>
            </div>
            <Footer/>
        </div>
    );
}
