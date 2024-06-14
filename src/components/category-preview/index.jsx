import ProductCard from '../product-card'
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles'

export default function CategoryPreview({ title, products }) {

    return (
        <CategoryPreviewContainer className="category-preview-container">
            <h2>
                <Title to={title} className='title'>{title.toUpperCase()}</Title>
            </h2>
            <Preview className="preview">
                {
                    products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}