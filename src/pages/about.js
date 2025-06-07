import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "@/components/Footer";
import {router} from "next/client";

export default function About() {
    return (
        <div className="min-h-screen bg-black text-green-400 px-6 font-mono flex flex-col justify-between">
            <div className="max-w-4xl mt-10 mx-auto text-lg leading-relaxed">
                <h1 className="text-4xl mb-6 text-white">About Me</h1>
                <p className={"fade-in-smooth"}>
                    Hey there! I'm Laura Chipman — a frontend web developer, creative chameleon,
                    and lifelong lover of all things visual and expressive. With roots in fine arts and a passion for
                    storytelling through design,
                    I build digital experiences that are not only functional, but deeply personal.
                </p>
                <p className="mt-4 fade-in-smooth">
                    This portfolio is a reflection of the work I love doing: building, styling, and shaping the web with
                    intention and artistry.
                </p>

                {/* Contact Icons */}
                <div className="mt-12 flex flex-wrap gap-12 justify-center items-center">
                    {/* GitHub */}
                    <div className="flex flex-col items-center group">
                        <FaGithub
                            className="hover:text-white cursor-pointer text-[4rem] sm:text-[5rem] md:text-[6rem] transition-transform group-hover:scale-110"
                            onClick={() => window.open("https://github.com/LauraChipman", "_blank")}
                        />
                        <span
                            className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                            GitHub
                        </span>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center group">
                        <FaLinkedin
                            className="hover:text-white cursor-pointer text-[4rem] sm:text-[5rem] md:text-[6rem] transition-transform group-hover:scale-110"
                            onClick={() => window.open("https://www.linkedin.com/in/laura-chipman-331641333/", "_blank")}
                        />
                        <span
                            className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                            LinkedIn
                        </span>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center group">
                        <FaEnvelope
                            className="hover:text-white cursor-pointer text-[4rem] sm:text-[5rem] md:text-[6rem] transition-transform group-hover:scale-110"
                            onClick={() => window.location.href = "/contact"}
                        />
                        <span
                            className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                            Contact
                        </span>
                    </div>

                </div>
                    <div
                        className="bg-black text-green-500 font-mono px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer shadow-lg border border-green-500 mt-4 mb-10"
                        onClick={() => router.push("/")}
                    >
                        ◀◀◀◀ Back to Home
                    </div>
            </div>

            <Footer/>
        </div>
    );
}
