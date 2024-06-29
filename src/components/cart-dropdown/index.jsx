import './cart-dropdown.styles.js'
import Button from '../button'
import CartItem from '../cart-item/cart-item'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.js'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/selectors.js'

export default function CartDropdown() {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer className='cart-dropdown-container'>
            <CartItems className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(cartItem =>
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        )
                        :
                        <EmptyMessage className='empty-message'>Your cart is empty</EmptyMessage>
                }

            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
