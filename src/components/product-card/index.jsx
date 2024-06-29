import Button, { BUTTON_TYPE_CLASSES } from '../button'
import { ProductCardContainer } from './product-card.styles'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/actions'
import { selectCartItems } from '../../store/cart/selectors'

export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

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