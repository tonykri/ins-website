import { useEffect, useState } from "react";
import "../styles/components/NavBar.css";

import Link from "next/link";
import Image from 'next/image';

export default function NavBar() {
    const [isNavActive, setIsNavActive] = useState(false);
    const [openNavBodyClass, setOpenNavBodyClass] = useState("nav-open");
    const [openBtnClass, setOpenBtnClass] = useState("nav-btn open-btn");

    useEffect(() => {
        const nav: HTMLElement | null = document.querySelector('.nav')

        const handleScroll = () => {
            if (nav === null) return;
            if (window.scrollY > nav.offsetHeight) {
                setIsNavActive(true);
            } else {
                setIsNavActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleToggle(){
        if(openBtnClass === "nav-btn open-btn"){
            setOpenNavBodyClass("nav-open visible");
            setOpenBtnClass("nav-btn open-btn hidden");
        }else{
            setOpenNavBodyClass("nav-open");
            setOpenBtnClass("nav-btn open-btn");
        }
    }

    return (
        <header>
            <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                <div className="container">
                    <Link href="/">
                        <Image
                            src="/images/SHOTBYINS_LOGO_SMALL.png"
                            alt="Logo"
                            width={150}
                            height={80}
                            className="logo"
                            priority={true}
                            loading="eager"
                        />
                    </Link>
                    <button className={openBtnClass} onClick={handleToggle}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>

            <div className={openNavBodyClass}>
                <div className={`header ${isNavActive ? 'active' : ''}`}>
                    <Link href="/">
                        <Image
                            src="/images/SHOTBYINS_LOGO_SMALL.png"
                            alt="Logo"
                            width={150}
                            height={80}
                            className="logo"
                            priority={true}
                            loading="eager"
                        />
                    </Link>
                    <button className="nav-btn close-btn" onClick={handleToggle}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <ul className="list">
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}
