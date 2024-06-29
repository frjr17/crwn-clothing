import CheckoutItem from '../../components/checkout-item'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.js'
import { selectCartItems, selectCartTotal } from '../../store/cart/selectors.js'
import { useSelector } from 'react-redux'


export default function Checkout() {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
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