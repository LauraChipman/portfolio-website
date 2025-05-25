import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer w-full bg-black text-green-500 py-2 border-t border-green-500">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-sm">
                    <p className="glitch m-0">Website by Laura Chipman | 2025</p>
                </div>
                <div className="flex gap-6">
                    <a
                        href="https://github.com/LauraChipman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-300 transition"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/laura-chipman-331641333/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-300 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="mailto:laurachipman66@gmail.com"
                        className="text-green-500 hover:text-green-300 transition"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
