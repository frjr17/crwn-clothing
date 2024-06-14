import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

export default function DirectoryItem({ category }) {
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(category.routeName);
    }
    return (
        <DirectoryItemContainer onClick={onNavigateHandler} key={category.id} className="directory-item-container">
            <BackgroundImage className="background-image" style={{
                backgroundImage: `url(${category.imageUrl})`
            }} />
            <Body className="body">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}