import Link from "next/link";
import "../../styles/components/PortfolioPage/Category.css";

interface CategoryComponentProps {
    id: number;
    title: string;
    description: string;
}

const Category: React.FC<CategoryComponentProps> = ({ id, title, description }) => {
    return (
        <div className="category" key={id}>
            <div className="category-body">
                <h1>{title}</h1>
                <p>{description}</p>
                <button><Link href="#">Explore More</Link></button>
            </div>
        </div>
    );
}

export default Category;