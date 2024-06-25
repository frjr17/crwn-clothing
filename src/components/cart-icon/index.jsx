import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart'
import { CartIconContainer, ItemCount, ShoppingIconContainer } from './cart-icon.styles.js'

export default function CartIcon() {
    const { toggleCart, cartCount } = useContext(CartContext)
    return (
        <CartIconContainer onClick={toggleCart} className='cart-icon-container'>
            <ShoppingIconContainer as={ShoppingIcon} className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
