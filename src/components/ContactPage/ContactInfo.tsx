import Link from "next/link";
import "../../styles/components/ContactPage/ContactInfo.css";

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <div>
                <h2>Contact Info</h2>
                <div className="contact-data">
                    <div>
                        <i className="logo fa-solid fa-envelope"></i>
                        <span>Email: test@email.com</span>
                    </div>
                    <div>
                        <i className="logo fa-solid fa-phone"></i>
                        <span>Phonenumber: +30 6912345678</span>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <div>
                    <Link href="#" className="item">
                        <i className="logo fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </Link>
                </div>
                <div>
                    <Link href="#" className="item">
                        <i className="logo fa-brands fa-facebook-f"></i>
                        <span>Facebook</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}