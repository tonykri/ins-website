import Slider from "react-slick";
import Image from 'next/image';
import "../../../styles/components/PortfolioPage/RealEstatePage/RealEstateWrapper.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RealEstateWrapper() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="real-estate">
            <div className="item">
                <h2 className="title">Villa Papei</h2>
                <div className="videos">
                    <Slider {...settings}>
                        {data.map((v, i) => (
                            <Video key={i} />
                        ))}
                    </Slider>
                </div>
                <div className="photos">
                    <Slider {...settings}>
                        {data.map((v, i) => (
                            <Photo key={i} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}


const Video = () => {
    return (
        <div className="video">
            <video className="video-test" width="100%" height="100%" controls>
                <source src="/pexels-volkan.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

const Photo = () => {
    return (
        <div className="photo" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499343245400-cddc78a01317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        </div>
    );
}