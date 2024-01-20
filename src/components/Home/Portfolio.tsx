import { useState } from "react";
import "../../styles/components/Home/Portfolio.css";
import Link from "next/link";


export default function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [panels, setPanels] = useState([
        { content: 'Panel 1', id: 1, display: true, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { content: 'Panel 2', id: 2, display: true, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { content: 'Panel 3', id: 3, display: true, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { content: 'Panel 4', id: 4, display: false, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { content: 'Panel 1', id: 5, display: false, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { content: 'Panel 2', id: 6, display: false, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { content: 'Panel 3', id: 7, display: false, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { content: 'Panel 4', id: 8, display: false, imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }
    ]);

    const handlePanelClick = (index: number) => {
        if (index >= 2 && index + 1 < panels.length) {
            if (!panels[index + 1].display) {
                const previousPanel = panels[index - 2];
                const nextPanel = panels[index + 1];
                previousPanel.display = false;
                nextPanel.display = true;
            }
        }
        if (index < panels.length - 1 && index != 0) {
            const previousPanel = panels[index - 1];
            const nextPanel = panels[index + 2];
            if (previousPanel != null)
                previousPanel.display = true;
            if (nextPanel != null)
                nextPanel.display = false;
        }
        setActiveIndex(index);
    };

    return (
        <section className="portfolio">
            <div className="info">
                <h2>Portfolio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident ullam at itaque corrupti reprehenderit recusandae tempore? Similique commodi voluptatem odit tenetur maxime saepe quasi enim exercitationem illo, esse nulla.</p>
                <button><Link href="#">Explore More</Link></button>
            </div>
            <main className="images">
                <div className="container">
                    {panels.map((panel, index) => {
                        return (
                            (
                                <ImageComponent
                                    key={panel.id}
                                    active={index === activeIndex}
                                    content={panel.content}
                                    display={panel.display}
                                    imageUrl={panel.imageUrl}
                                    onClick={() => handlePanelClick(index)}
                                />
                            )
                        )
                    })}
                </div>
            </main>
        </section>
    );
}



interface ImageComponentProps {
    active: boolean;
    content: string;
    display: boolean;
    imageUrl: string;
    onClick: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ active, content, display, imageUrl, onClick }) => {
    let classes = active ? "panel active" : "panel"
    if (!display)
        classes += " hidden";

    return (
        <div
            onClick={onClick}
            className={classes}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <h3>{content}</h3>
        </div>
    );
};