import "../../styles/components/PortfolioPage/CategoriesWrapper.css";
import Category from "./Category";

export default function CategoriesWrapper() {
    const categories = [
        { id: 1, title: "Category 1", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" },
        { id: 2, title: "Category 2", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" },
        { id: 3, title: "Category 3", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" },
        { id: 4, title: "Category 4", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" },
        { id: 5, title: "Category 5", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" },
        { id: 6, title: "Category 6", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" },
        { id: 7, title: "Category 7", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" },
        { id: 8, title: "Category 8", description: "You can find photos and videos here about current category. Have a look and read about each service in services page" }
    ]
    return (
        <main className="categories">
            <div className="categories-info">
                <h2>Portfolio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident ullam at itaque corrupti reprehenderit recusandae tempore? Similique commodi voluptatem odit tenetur maxime saepe quasi enim exercitationem illo, esse nulla.</p>
            </div>
            <div className="categories-wrapper">
                {categories.map((category) => <Category key={category.id} id={category.id} title={category.title} description={category.description} />)}
            </div>
        </main>
    );
}