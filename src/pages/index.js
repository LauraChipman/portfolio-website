import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import Footer from "@/components/Footer";
import Head from "next/head";


const projects = [
    {
        id: 1,
        title: "AJ’s Bar & Music Hall",
        description:
            "A full-scale event and music venue website with MongoDB, Next.js, and Tailwind CSS.",
        link: "/projects/ajs-bar-music-hall",
    },
    {
        id: 2,
        title: "Interactive Glossary Application",
        description:
            "A Flask-powered interactive glossary with CRUD operations, MongoDB, and GridFS image handling.",
        link: "/projects/interactive-glossary",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description:
            "A personalized portfolio website showcasing my skills, built with Next.js and Tailwind CSS.",
        link: "/projects/portfolio-website",
    },
];

export default function Home() {
    const [text, setText] = useState("");
    const fullText = "LAURA CHIPMAN";
    const [bootUp, setBootUp] = useState(false);
    const [showCatchphrase, setShowCatchphrase] = useState(false);
    const [activePreview, setActivePreview] = useState(null);
    const [hideButtons, setHideButtons] = useState(false);
    const router = useRouter();
    const [hoverTimeout, setHoverTimeout] = useState(null);


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

    const handleMouseEnter = (type) => {
        if (!bootUp) return;

        // Clear any previous timeouts
        if (hoverTimeout) clearTimeout(hoverTimeout);

        // Delay preview open to avoid accidental flicker
        const timeout = setTimeout(() => {
            setHideButtons(true);
            setActivePreview(type);
        }, 200); // 200ms feels intentional without lag

        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setActivePreview(null);
        setHideButtons(false);
    };

    return (
        <>
            <Head>
                <title>Laura Chipman | Web Developer</title>
            </Head>
            <div className="flex flex-col min-h-screen bg-black text-green-500">
                {/* MAIN CONTENT: Centered vertically and horizontally */}
                <div className="flex-grow flex items-center justify-center px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl px-4">
                        {/* Left: Name + Catchphrase */}
                        <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
                            <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-primary mb-4 crt-flicker glitch break-words">
                                {text}
                                <span className="blinking-cursor">|</span>
                            </h1>

                            {showCatchphrase && (
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl fade-in-smooth font-secondary max-w-[90%] leading-snug text-left">
                                    Frontend Web Developer |
                                    Creative Chameleon | Committed to Delivering the Best
                                </p>
                            )}
                        </div>

                        {/* Right: Buttons */}
                        <div
                            className={`w-full lg:w-[40%] flex flex-col gap-4 justify-center items-center transition-transform duration-500 ${
                                hideButtons
                                    ? "-translate-y-10 opacity-0"
                                    : "translate-y-0 opacity-100"
                            }`}
                        >
                            <button
                                className={`crt-button w-full max-w-[450px] text-lg ${
                                    bootUp ? "fade-in-delay-2" : "hidden"
                                }`}
                                onMouseOver={() => handleMouseEnter("projects")}
                                onClick={() => router.push("/projects")}
                            >
                                [ See My Work ]
                            </button>
                            <button
                                className={`crt-button w-full max-w-[450px] text-lg ${
                                    bootUp ? "fade-in-delay-3" : "hidden"
                                }`}
                                onMouseOver={() => handleMouseEnter("contact")}
                                onClick={() => router.push("/contact")}
                            >
                                [ Contact Me ]
                            </button>
                            <button
                                className={`crt-button w-full max-w-[450px] text-green text-lg ${
                                    bootUp ? "fade-in-delay-4" : "hidden"
                                }`}
                                onClick={() => router.push("/about")}
                            >
                                [ About Me ]
                            </button>

                        </div>
                    </div>

                    {/* Preview Box */}
                    {activePreview && (
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-6 rounded-lg hover:bg-green-400/10 transition duration-300 shadow-xl border border-green-500 z-50"
                            onMouseLeave={handleMouseLeave}
                        >
                            {activePreview === "projects" && (
                                <>
                                    <h3
                                        className="text-white mb-6 font-mono hover:text-green-500 cursor-pointer text-[2.5rem]"
                                        onClick={() => router.push("/projects")}
                                    >
                                        Projects
                                    </h3>
                                    <div className="flex flex-col gap-6">
                                        {projects.map((project) => (
                                            <div
                                                key={project.id}
                                                className="flex flex-col items-center group cursor-pointer transition-all duration-200"
                                                onClick={() => router.push(project.link)}
                                            >
                                                <div className="text-[2rem] group-hover:text-white">{project.title}</div>
                                                <span className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-center max-w-xs">
                    {project.description}
                  </span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {activePreview === "contact" && (
                                <>
                                    <h3 className="text-white mb-6 font-mono text-[2.5rem]">Contact Links</h3>
                                    <div className="flex flex-wrap gap-8 justify-center items-center">
                                        {/* GitHub */}
                                        <div className="flex flex-col items-center group">
                                            <FaGithub
                                                className="hover:text-white cursor-pointer text-[3rem] sm:text-[4rem] md:text-[6rem] transition-transform group-hover:scale-110"
                                                onClick={() => window.open("https://github.com/LauraChipman", "_blank")}
                                            />
                                            <span className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  GitHub
                </span>
                                        </div>

                                        {/* LinkedIn */}
                                        <div className="flex flex-col items-center group">
                                            <FaLinkedin
                                                className="hover:text-white cursor-pointer text-[3rem] sm:text-[4rem] md:text-[6rem] transition-transform group-hover:scale-110"
                                                onClick={() =>
                                                    window.open("https://www.linkedin.com/in/laura-chipman-331641333/", "_blank")
                                                }
                                            />
                                            <span className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  LinkedIn
                </span>
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col items-center group">
                                            <FaEnvelope
                                                className="hover:text-white cursor-pointer text-[3rem] sm:text-[4rem] md:text-[6rem] transition-transform group-hover:scale-110"
                                                onClick={() => router.push("/contact")}
                                            />
                                            <span className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  Contact
                </span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* About Hover (Optional Content or Just Disable Preview) */}
                            {activePreview === "about" && (
                                <h3 className="text-white font-mono text-2xl text-center">Learn more about me!</h3>
                            )}
                        </div>
                    )}

                </div>

                {/* Footer sticks to bottom */}
                <Footer/>
            </div>
        </>
    );
}
