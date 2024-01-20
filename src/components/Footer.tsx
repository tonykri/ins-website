import Link from "next/link";
import "../styles/components/Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="bar">
                <Link href="#" className="item">
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </Link>
                <div className="separator"/>
                <Link href="#" className="item">
                    <i className="fa-brands fa-tiktok"></i>
                    <span>Tik Tok</span>
                </Link>
                <div className="separator"/>
                <Link href="#" className="item">
                <i className="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                </Link>
            </div>
            
            <div className="info">
                <div className="item" id="info">
                    info
                </div>
                <div className="item" id="contact">
                    contact
                </div>
            </div>
        </footer>
    );
}