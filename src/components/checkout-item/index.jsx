import { useContext } from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart'


export default function CheckoutItem({ cartItem }) {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem)
    const clearItemFromCartHandler = () => clearItemFromCart(cartItem)
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt={cartItem.name} />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div onClick={removeItemFromCartHandler} className='arrow'>&#10094;</div>
                <span className='value'>{cartItem.quantity}</span>
                <div onClick={addItemToCartHandler} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>${cartItem.price.toFixed(2)}</span>
            <div onClick={clearItemFromCartHandler} className='remove-button'>&#10005;</div>
        </div>
    )
}