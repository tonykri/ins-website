import Link from "next/link";
import Slider from 'react-slick';
import "../../styles/components/HomePage/Services.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Services() {
    const services = [
        { title: "Service 1", titleLine: "Ideal for fast growing businesses", price: 99.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
        { title: "Service 2", titleLine: "Ideal for small businesses", price: 366.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
        { title: "Service 3", titleLine: "Ideal for fast growing businesses", price: 49.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
        { title: "Service 4", titleLine: "Ideal for fast growing businesses", price: 59.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
        { title: "Service 5", titleLine: "Ideal for small businesses", price: 164.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
        { title: "Service 6", titleLine: "Ideal for fast growing businesses", price: 199.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
        { title: "Service 7", titleLine: "Ideal for fast growing businesses", price: 219.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
        { title: "Service 8", titleLine: "Ideal for small businesses", price: 39.9, specifications: ["Photography", "Video", "Tik Tok", "Social Media Support"] },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        vertical: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section className="services">
            <div className="info">
                <h2>Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident ullam at itaque corrupti reprehenderit recusandae tempore? Similique commodi voluptatem odit tenetur maxime saepe quasi enim exercitationem illo, esse nulla.</p>
                <button><Link href="/services">Explore More</Link></button>
            </div>
            <div className="service-wrapper">
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <ServiceComponent key={index} title={service.title} titleLine={service.titleLine} price={service.price} specifications={service.specifications} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}


interface ServiceComponentProps {
    title: string;
    titleLine: string;
    price: number;
    specifications: string[];
}

const ServiceComponent: React.FC<ServiceComponentProps> = ({ title, titleLine, price, specifications }) => {

    return (
        <div className="service-card">
            <div>
                <h3>{title}</h3>
                <span className="small-opacity">{titleLine}</span>
            </div>

            <div>
                <span id="price">€{price}<span>/mo</span></span>
                <span className="small-opacity">Try it now</span>
                <button id="learn-more-btn"><Link href="#">Learn More</Link></button>
            </div>

            <div>
                <h4>What is included</h4>
                <ul>
                    {
                        specifications.map((specification, index) => (
                            <li key={index} className="small-opacity"><i className="tik fa-regular fa-circle-check"></i> {specification}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};