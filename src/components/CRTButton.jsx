// components/CRTButton.js
import { useRouter } from "next/router";

export default function CRTButton({ label = "<<<< Back", route = "/" }) {
    const router = useRouter();

    return (
        <div
            className="fixed bottom-8 right-8 bg-slate-800 text-green-500 font-mono px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer shadow-lg"
            onClick={() => router.push(route)}
        >
            {label}
        </div>
    );
}
