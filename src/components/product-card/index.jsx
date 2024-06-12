import { useContext } from 'react'
import Button from '../button'
import './product-card.styles.scss'
import { CartContext } from '../../contexts/cart'

export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price.toFixed(2)}</span>
            </div>
            <Button buttonType={'inverted'} onClick={addProductToCart}> Add to Card</Button>
        </div>
    )
}