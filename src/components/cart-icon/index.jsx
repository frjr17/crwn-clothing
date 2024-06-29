import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartIconContainer, ItemCount, ShoppingIconContainer } from './cart-icon.styles.js'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/actions.js'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/selectors.js'

export default function CartIcon() {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const toggleCart = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <CartIconContainer onClick={toggleCart} className='cart-icon-container'>
            <ShoppingIconContainer as={ShoppingIcon} className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
