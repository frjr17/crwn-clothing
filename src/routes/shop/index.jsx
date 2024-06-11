import { useContext } from "react"
import { ProductContext } from "../../contexts/products"
import ProductCard from "../../components/product-card"
import './shop.styles.scss'

export default function Shop() {
    const { products } = useContext(ProductContext)
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}