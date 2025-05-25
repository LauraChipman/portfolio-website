import { useState } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted: ", formData);
    };

    const router = useRouter();

    return (
        <div className="contact-flex flex-col items-start bg-black  text-green-500  shadow-lg  mx-auto  rounded-lg ">
            <h1 className="contact-me-text mb-6 glitch w-full">[ CONTACT ME ]</h1>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-lg">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-lg">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="block text-lg">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="input-field"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="send-button mt-4 px-6 py-3 text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-black rounded-lg transition-all"
                    >
                        [ Send Message ]
                    </button>
                </div>
                <div
                    className=" right-8 bg-slate-800 text-green-500 font-mono px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer shadow-lg border border-green-500"
                    onClick={() => router.push("/")}
                >
                    ◀◀◀◀ Back to Home
                </div>
            </form>

        </div>

    );
}