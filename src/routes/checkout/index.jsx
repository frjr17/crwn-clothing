import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import CheckoutItem from '../../components/checkout-item'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.js'


export default function Checkout() {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <CheckoutContainer className='checkout-container'>
            <CheckoutHeader className="checkout-header">
                <HeaderBlock className="header-block"><span>Product</span></HeaderBlock>
                <HeaderBlock className="header-block"><span>Description</span></HeaderBlock>
                <HeaderBlock className="header-block"><span>Quantity</span></HeaderBlock>
                <HeaderBlock className="header-block"><span>Price</span></HeaderBlock>
                <HeaderBlock className="header-block">Remove</HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <Total className="total">Total: ${cartTotal.toFixed(2)}</Total>

        </CheckoutContainer>
    )
}