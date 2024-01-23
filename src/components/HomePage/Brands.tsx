import Slider from "react-slick";
import Image from 'next/image';
import "../../styles/components/HomePage/Brands.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Portfolio() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        vertical: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    return (
        <section className="brands">
            <div className="brands-wrapper">
                <Slider {...settings}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="item">
                            <Image
                                src="/images/SHOTBYINS_LOGO_SMALL.png"
                                alt="Logo"
                                width={150}
                                height={80}
                                priority={true}
                                loading="eager"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}