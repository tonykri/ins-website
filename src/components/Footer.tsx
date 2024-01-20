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
                <div className="separator" />
                <Link href="#" className="item">
                    <i className="fa-brands fa-tiktok"></i>
                    <span>Tik Tok</span>
                </Link>
                <div className="separator" />
                <Link href="#" className="item">
                    <i className="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                </Link>
            </div>

            <div className="info">
                <div className="item" id="info">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis esse ea! Non repellat cupiditate temporibus, sint earum ipsa corporis molestias consectetur culpa voluptate voluptatum dolor, aut cumque at. Rerum.</p>
                </div>
                <div className="item" id="contact">
                    <h2>Contact</h2>
                    <div id="data">
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <span>Email: test@email.com</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-phone"></i>
                            <span>Phonenumber: +30 6912345678</span>
                        </div>
                    </div>
                    <div id="copyrights">
                        <i className="fa-solid fa-copyright"></i>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}