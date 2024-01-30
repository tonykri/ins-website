import { useState } from "react";
import "../../styles/components/ServicesPage/Services.css";

export default function Services() {
    const [selected, setSelected] = useState<number | null>(null);
    const data = [
        { question: "Question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae vel ullam tempora amet. Consequatur quas, quia dicta, repellendus pariatur quos nam sit amet eum illum voluptate omnis autem voluptas!" },
        { question: "Question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae vel ullam tempora amet. Consequatur quas, quia dicta, repellendus pariatur quos nam sit amet eum illum voluptate omnis autem voluptas!" },
        { question: "Question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae vel ullam tempora amet. Consequatur quas, quia dicta, repellendus pariatur quos nam sit amet eum illum voluptate omnis autem voluptas!" },
        { question: "Question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae vel ullam tempora amet. Consequatur quas, quia dicta, repellendus pariatur quos nam sit amet eum illum voluptate omnis autem voluptas!" },
        { question: "Question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae vel ullam tempora amet. Consequatur quas, quia dicta, repellendus pariatur quos nam sit amet eum illum voluptate omnis autem voluptas!" },
        { question: "Question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae vel ullam tempora amet. Consequatur quas, quia dicta, repellendus pariatur quos nam sit amet eum illum voluptate omnis autem voluptas!" },
    ];

    const toggle = (i: number) => {
        if (i === selected)
            return setSelected(null);
        setSelected(i);
    }
    return (
        <section className="services">
        <h2 id="title">Services we Provide</h2>
        <main className="wrapper">
            {data.map((item, index) =>
                <div key={index} className="item" onClick={() => toggle(index)}>
                    <div className="title">
                        <h2>{item.question}</h2>
                        <span>{selected === index ? <i className="fa-solid fa-minus"></i> : <i className="fa-regular fa-plus"></i>}</span>
                    </div>
                    <div className={selected === index ? "content show" : "content"}>{item.answer}</div>
                </div>
            )}
        </main>
    </section>
    );
}