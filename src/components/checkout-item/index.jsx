import { CheckoutItemContainer, ImageContainer, Name, Price, Quantity } from './checkout-item.styles'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/actions'
import { selectCartItems } from '../../store/cart/selectors'


export default function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    return (
        <CheckoutItemContainer className='checkout-item-container'>
            <ImageContainer className='image-container'>
                <img src={cartItem.imageUrl} alt={cartItem.name} />
            </ImageContainer>
            <Name className='name'>{cartItem.name}</Name>
            <Quantity className='quantity'>
                <div onClick={removeItemFromCartHandler} className='arrow'>&#10094;</div>
                <span className='value'>{cartItem.quantity}</span>
                <div onClick={addItemToCartHandler} className='arrow'>&#10095;</div>
            </Quantity>
            <Price className='price'>${cartItem.price.toFixed(2)}</Price>
            <div onClick={clearItemFromCartHandler} className='remove-button'>&#10005;</div>
        </CheckoutItemContainer>
    )
}