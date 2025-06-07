import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Head from "next/head";


export default function ContactPage() {
    return (
        <>
        <Head>
          <title>Contact | Laura Chipman</title>
        </Head>
            <div className="min-h-screen flex flex-col justify-between bg-black text-green-500">
                {/* Main content sits here */}
                <div className="flex-grow">
                    <ContactForm />
                </div>

                {/* Footer pushed to the bottom */}
                <Footer />
            </div>
        </>
    );
}