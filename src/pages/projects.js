import Link from "next/link";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import projects from "@/data/projects";

export default function Projects() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col justify-between bg-black text-white">
            <div className="flex-grow flex flex-col items-center px-4">
                <h1 className="text-center text-5xl mb-10 mt-10 text-green-400 font-mono">
                    [ PROJECTS ]
                </h1>
                <h2 className="text-center text-2xl mb-10  text-green-400 font-mono">
                    Click for more information
                </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
                        {projects.map((project) =>
                            project.slug ? (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.slug}`}
                                    className="projects-container bg-white/10 backdrop-blur-md p-6 rounded-lg hover:bg-green-400/10 transition duration-300 shadow-xl border border-green-500"
                                >
                                    <h2 className="project-title text-2xl mb-2">{project.title}</h2>
                                    <p className="project-description">{project.description}</p>
                                </Link>
                            ) : (
                                <a
                                    key={project.id}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects-container bg-slate-800 p-6 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg no-underline border-none"
                                >
                                    <h2 className="project-title text-2xl mb-2">{project.title}</h2>
                                    <p className="project-description">{project.description}</p>
                                </a>
                            )
                        )}
                    </div>

                    {/* Back to Home button now correctly centered and spaced */}
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

