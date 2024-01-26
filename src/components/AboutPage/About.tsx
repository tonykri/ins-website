import Link from "next/link";
import "../../styles/components/AboutPage/About.css";

export default function About() {
    return (
        <section className="about">
            <div className="data">
                <main className="about-info">
                    <h2 className="title">About Us</h2>
                    <div className="paragraphs">
                        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elitates</p>
                        <p className="info">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem reprehenderit cumque dicta ex nulla debitis quaerat vero assumenda, ipsa id accusantium nemo saepe? Quae labore, esse delectus inventore ipsum illum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore soluta voluptatibus corporis voluptates temporibus, deserunt officia fugit? Corrupti cupiditate quas provident numquam nesciunt magni? Quia sapiente nemo enim distinctio.
                        </p>
                    </div>
                    <button><Link href="#">Services</Link></button>
                </main>
                <div className="image">

                </div>
            </div>
        </section>
    );
}