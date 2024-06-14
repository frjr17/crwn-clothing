import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart'
import { CartIconContainer, ItemCount, ShoppingIconContainer } from './cart-icon.styles.js'

export default function CartIcon() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <CartIconContainer onClick={toggleIsCartOpen} className='cart-icon-container'>
            <ShoppingIconContainer as={ShoppingIcon} className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
