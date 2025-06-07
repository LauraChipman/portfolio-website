import Head from "next/head";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>About Me | Laura Chipman</title>
            </Head>
            <div className="min-h-screen bg-black text-green-400 px-6 font-mono flex flex-col justify-between">
                <div className="max-w-4xl mt-10 mx-auto text-lg leading-relaxed">
                    <h1 className="text-4xl mb-6 text-white">About Me</h1>
                    <p className="fade-in-smooth">
                        Hey there! I&apos;m Laura Chipman — a frontend web developer, creative chameleon,
                        and lifelong lover of all things visual and expressive. With roots in fine arts and a passion
                        for storytelling through design, I build digital experiences that are not only functional,
                        but deeply personal.
                    </p>
                    <p className="mt-4 fade-in-smooth">
                        I hold a diploma in Visual and Creative Arts with a specialty in Drawing and Painting from the
                        Haliburton School of the Arts (Fleming College), and a diploma in Makeup Artistry and Design
                        from the College of Makeup Art and Design. These creative foundations sharpened my eye for detail,
                        layout, and emotional tone — all essential to building memorable digital experiences.
                    </p>
                    <p className="mt-4 fade-in-smooth">
                        I also recently completed the Computer Programming program at Lambton College, where I developed
                        full-stack technical skills and experience in modern web development, DevOps, and software architecture.
                        This blend of art and code is at the heart of how I approach frontend development today.
                    </p>

                    {/* Contact Icons */}
                    <div className="mt-12 flex flex-wrap gap-12 justify-center items-center">
                        <div className="flex flex-col items-center group">
                            <FaGithub
                                className="hover:text-white cursor-pointer text-[4rem] sm:text-[5rem] md:text-[6rem] transition-transform group-hover:scale-110"
                                onClick={() => window.open("https://github.com/LauraChipman", "_blank")}
                            />
                            <span className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                                GitHub
                            </span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <FaLinkedin
                                className="hover:text-white cursor-pointer text-[4rem] sm:text-[5rem] md:text-[6rem] transition-transform group-hover:scale-110"
                                onClick={() =>
                                    window.open("https://www.linkedin.com/in/laura-chipman-331641333/", "_blank")
                                }
                            />
                            <span className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                                LinkedIn
                            </span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <FaEnvelope
                                className="hover:text-white cursor-pointer text-[4rem] sm:text-[5rem] md:text-[6rem] transition-transform group-hover:scale-110"
                                onClick={() => router.push("/contact")}
                            />
                            <span className="text-sm text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                                Contact
                            </span>
                        </div>
                    </div>

                    <div
                        className="bg-black text-green-500 font-mono px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer shadow-lg border border-green-500 mt-4 mb-10 text-center max-w-fit mx-auto"
                        onClick={() => router.push("/")}
                    >
                        ◀◀◀◀ Back to Home
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
