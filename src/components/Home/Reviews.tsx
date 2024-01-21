import Slider from "react-slick";
import Image from 'next/image';
import "../../styles/components/Home/Reviews.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Portfolio() {
    const reviews = [
        { name: 'Tony Kristaki', profession: 'Web Developer', profileUrl: '/avatars/avatar-1.png', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, sequi quibusdam ea enim repellendus iusto iure doloribus officia tempore. Quos iste saepe deleniti, recusandae illum eligendi aliquid molestias quia.', stars: 5, date: '21/01/2024' },
        { name: 'Frantzis Kornilakis', profession: 'Data Scientist', profileUrl: '/avatars/avatar-2.png', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, sequi quibusdam ea enim repellendus iusto iure doloribus officia tempore. Quos iste saepe deleniti, recusandae illum eligendi aliquid molestias quia.', stars: 5, date: '21/01/2024' },
        { name: 'Maria Papadopoulou', profession: 'Teacher', profileUrl: '/avatars/avatar-3.png', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, sequi quibusdam ea enim repellendus iusto iure doloribus officia tempore. Quos iste saepe deleniti, recusandae illum eligendi aliquid molestias quia.', stars: 5, date: '21/01/2024' },
        { name: 'Eleni Georgiou', profession: 'Laywer', profileUrl: '/avatars/avatar-4.png', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, sequi quibusdam ea enim repellendus iusto iure doloribus officia tempore. Quos iste saepe deleniti, recusandae illum eligendi aliquid molestias quia.', stars: 5, date: '21/01/2024' },
        { name: 'Maria Hasapi', profession: 'Doctor', profileUrl: '/avatars/avatar-5.png', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, sequi quibusdam ea enim repellendus iusto iure doloribus officia tempore. Quos iste saepe deleniti, recusandae illum eligendi aliquid molestias quia.', stars: 5, date: '21/01/2024' },
        { name: 'Themistoklis Fragoulis', profession: 'Businessman', profileUrl: '/avatars/avatar-1.png', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, sequi quibusdam ea enim repellendus iusto iure doloribus officia tempore. Quos iste saepe deleniti, recusandae illum eligendi aliquid molestias quia.', stars: 5, date: '21/01/2024' },
        { name: 'Georgia Theodorou', profession: 'Accountant', profileUrl: '/avatars/avatar-4.png', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis, sequi quibusdam ea enim repellendus iusto iure doloribus officia tempore. Quos iste saepe deleniti, recusandae illum eligendi aliquid molestias quia.', stars: 5, date: '21/01/2024' }
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
        <section className="reviews">
            <h2>Trusted by over 1000 customers</h2>
            <div className="reviews-wrapper">
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <ReviewComponent key={index} name={review.name} profession={review.profession} profileUrl={review.profileUrl} review={review.review} stars={review.stars} date={review.date} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}


interface ReviewComponentProps {
    name: string;
    profession: string;
    profileUrl: string;
    review: string;
    stars: number;
    date: string;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ name, profession, profileUrl, review, stars, date }) => {

    return (
        <div className="review-card">
            <div className="review-item">
                <Image
                    src={profileUrl}
                    alt="Logo"
                    width={50}
                    height={50}
                    priority={true}
                    className="profile-image"
                    loading="eager"
                />
                <div id="name-profession">
                    <h3>{name}</h3>
                    <span className="small-opacity">{profession}</span>
                </div>
            </div>

            <p className="review-item">
                {review}
            </p>

            <div className="review-item">
                <div>
                {Array.from({ length: stars }).map((_, index) => (
                        <i key={index} className="star fa-solid fa-star"></i>
                    ))}
                </div>
                <span className="small-opacity">
                    Reviewed on {date}
                </span>
            </div>
        </div>
    );
};