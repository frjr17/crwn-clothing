import { useContext } from 'react'
import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart'
import CheckoutItem from '../../components/checkout-item'


export default function Checkout() {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block">Remove</div>
            </div>
            {
                cartItems.map(cartItem => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <span className="total">Total: ${cartTotal.toFixed(2)}</span>
        </div>
    )
}