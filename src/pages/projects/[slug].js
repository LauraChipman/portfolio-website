import { useRouter } from "next/router";
import Head from "next/head";
import projects from "@/data/projects";
import Footer from "@/components/Footer";

export default function ProjectPage() {
    const router = useRouter();
    const { slug } = router.query;

    const project = projects.find((p) => p.slug === slug);

    if (!project)
        return <p className="p-6 text-green-400 font-mono text-xl">Loading...</p>;

    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <div className="min-h-screen bg-black text-green-400 px-6 py-12 flex flex-col items-center font-mono">
                <div className="w-full max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        {project.title}
                    </h1>

                    <p className="text-green-200 text-lg leading-relaxed mb-10 whitespace-pre-line">
                        {project.longDescription}
                    </p>

                    {project.images?.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {project.images.map(({ src, caption }, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <img
                                        src={src}
                                        alt={caption || `Screenshot ${i + 1}`}
                                        className="w-full rounded-lg shadow-md mb-2"
                                    />
                                    {caption && (
                                        <p className="text-sm text-green-300 text-center">{caption}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}


                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 text-center"
                            >
                                [ View Live / GitHub ]
                            </a>
                        )}


                    </div>
                </div>
                <button onClick={() => router.back()} className="right-8 bg-black text-green-500 align-middle ml-50 font-mono px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer shadow-lg border border-green-500 mt-10 inline-block">
                    ◀◀ Back to Projects
                </button>
            </div>
            <Footer/>
        </>
    );
}
