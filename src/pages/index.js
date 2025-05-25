import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "AJ’s Bar & Music Hall",
        description: "A full-scale event and music venue website with MongoDB, Next.js, and Tailwind CSS.",
        link: "/projects/ajs-bar-music-hall"
    },
    {
        id: 2,
        title: "Interactive Glossary Application",
        description: "A Flask-powered interactive glossary with CRUD operations, MongoDB, and GridFS image handling.",
        link: "/projects/interactive-glossary"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A personalized portfolio website showcasing my skills, built with Next.js and Tailwind CSS.",
        link: "/projects/portfolio-website"
    }
];

export default function Home() {
    const [text, setText] = useState("");
    const fullText = "LAURA CHIPMAN";
    const [bootUp, setBootUp] = useState(false);
    const [showCatchphrase, setShowCatchphrase] = useState(false);
    const [activePreview, setActivePreview] = useState(null); // "projects" or "contact"
    const [hideButtons, setHideButtons] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
                setBootUp(true);
                setTimeout(() => setShowCatchphrase(true), 500);
            }
        }, 150);
        return () => clearInterval(typingInterval);
    }, [fullText]);

    // Handle hover with a slight delay to avoid flickering
    const handleMouseEnter = (type) => {
        if (!bootUp) return; // Prevent hover effect if buttons are not fully faded in
        setHideButtons(true);
        setActivePreview(type);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setActivePreview(null);
            setHideButtons(false);
        }, 200);
    };

    return (
        <div className="min-h-screen flex bg-black text-green-500 relative">
            <div className="hero">
                <h1 className="text-[6rem] font-primary mb-4 glitch inline-flex">
                    {text}
                    <span className="blinking-cursor">|</span>
                </h1>
                <div className="h-[3rem]">
                    {showCatchphrase && (
                        <p className="large-catchphrase mt-4 font-secondary opacity-0 fade-in-smooth">
                            Frontend Web Developer | Creative Chameleon | Committed to Delivering the Best
                        </p>
                    )}
                </div>
            </div>

            <div
                className={`flex flex-col gap-4 mr-24 center-vertically transition-transform duration-500 ${
                    hideButtons ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                }`}
            >
                <button
                    className={`crt-button ${bootUp ? "fade-in-delay-2" : "hidden"}`}
                    onMouseOver={() => handleMouseEnter("projects")}
                    onClick={() => router.push("/projects")}
                >
                    [ See My Work ]
                </button>
                <button
                    className={`crt-button ${bootUp ? "fade-in-delay-3" : "hidden"}`}
                    onMouseOver={() => handleMouseEnter("contact")}
                    onClick={() => router.push("/contact")}
                >
                    [ Contact Me ]
                </button>
            </div>

            {/* Shared Preview Container */}
            {activePreview && (
                <div
                    className="absolute top-[20%] right-[5%] bg-slate-800 p-10 rounded-lg shadow-lg w-[600px] pointer-events-auto transition-all duration-300"
                    onMouseLeave={handleMouseLeave}
                >
                    {activePreview === "projects" ? (
                        <>
                            <h3
                                className="text-green-400 mb-6 font-mono hover:text-green-500 cursor-pointer text-[2.5rem]"
                                onClick={() => router.push("/projects")}
                            >
                                Projects
                            </h3>
                            <div className="flex flex-col gap-6">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="hover:text-green-500 cursor-pointer text-[2rem] transition-all duration-200"
                                        onClick={() => router.push(project.link)}
                                    >
                                        {project.title}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-green-400 mb-6 font-mono text-[2.5rem]">
                                Contact Links
                            </h3>
                            <div className="flex gap-16 justify-center items-center">
                                <FaGithub
                                    className="hover:text-green-500 cursor-pointer text-[6rem] transition-transform hover:scale-110"
                                    onClick={() => window.open("https://github.com/LauraChipman", "_blank")}
                                />
                                <FaLinkedin
                                    className="hover:text-green-500 cursor-pointer text-[6rem] transition-transform hover:scale-110"
                                    onClick={() => window.open("https://www.linkedin.com/in/laura-chipman-331641333/", "_blank")}
                                />
                                <FaEnvelope
                                    className="hover:text-green-500 cursor-pointer text-[6rem] transition-transform hover:scale-110"
                                    onClick={() => router.push("/contact")}
                                />
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
