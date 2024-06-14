import { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button'
import { CartContext } from '../../contexts/cart'
import { ProductCardContainer } from './product-card.styles'

export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    return (
        <ProductCardContainer className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price.toFixed(2)}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}> Add to Card</Button>
        </ProductCardContainer>
    )
}