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
                    <h1 className="text-4xl mb-6 text-white">[ ABOUT ME ]</h1>

                    <p className="fade-in-smooth">
                        I&apos;m Laura — a frontend-focused developer with an unconventional but impactful journey into tech.
                        Before diving into programming, I studied visual and creative arts and spent years working in
                        fast-paced environments that demanded adaptability, empathy, and resourcefulness. Now, I bring that
                        same energy and creativity into writing clean, meaningful code.
                    </p>

                    <p className="mt-4 fade-in-smooth">
                        Whether I&apos;m building a Flask app that interfaces with MongoDB or designing retro-inspired
                        layouts with React and Tailwind CSS, I&apos;m all in — learning by doing, asking smart questions,
                        and refining my skills through real-world projects. I&apos;ve developed a glossary web app from
                        scratch, created a full-stack event site for a live music venue, and continue to experiment with
                        tools that allow me to blend design and logic.
                    </p>

                    <p className="mt-4 fade-in-smooth">
                        I’m actively seeking opportunities to contribute to collaborative, forward-thinking teams — especially
                        those open to mentoring new grads who are eager, quick to grow, and full of ideas. If you&apos;re looking
                        for a creative technologist with drive, heart, and a serious love for making things work beautifully,
                        let’s connect.
                    </p>

                    {/* Skills Section */}
                    <h2 className="text-3xl mt-12 mb-4 text-center text-white">[ SKILLS ]</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 fade-in-smooth">
                        <div>
                            <h3 className="text-2xl mb-2 text-green-300">TECHNICAL</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Python, Flask, and MongoDB (Atlas & GridFS)</li>
                                <li>Java EE (Lombok, JUnit, Maven, JSON processing)</li>
                                <li>Full-Stack JavaScript (Node.js, Express, React, Next.js)</li>
                                <li>Git, GitHub, and GitHub Actions (CI/CD pipelines)</li>
                                <li>RESTful APIs and secure secrets management</li>
                                <li>Responsive design using Tailwind CSS and Bootstrap</li>
                                <li>Unit testing, CRUD operations, database integration</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl mb-2 text-green-300">SOFT</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Creative problem-solving and design thinking</li>
                                <li>Visual storytelling and UI/UX awareness</li>
                                <li>Strong communicator and empathetic collaborator</li>
                                <li>Adaptable, self-motivated, and a fast learner</li>
                                <li>Thrives in both independent and team settings</li>
                                <li>Passionate about bridging creativity with code</li>
                            </ul>
                        </div>
                    </div>

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
