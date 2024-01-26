import "../../styles/components/ContactPage/ContactWrapper.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactWrapper() {
    return (
        <section className="contact">
            <h1>Fill the contact form to get in touch with you</h1>
            <main>
                <ContactInfo />
                <ContactForm />
            </main>
        </section>
    );
}