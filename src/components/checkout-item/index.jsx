import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import { CheckoutItemContainer, ImageContainer, Name, Price, Quantity } from './checkout-item.styles'


export default function CheckoutItem({ cartItem }) {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem)
    const clearItemFromCartHandler = () => clearItemFromCart(cartItem)
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