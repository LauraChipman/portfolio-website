import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";


export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-black text-green-500">
            {/* Main content sits here */}
            <div className="flex-grow">
                <ContactForm />
            </div>

            {/* Footer pushed to the bottom */}
            <Footer />
        </div>

    );
}