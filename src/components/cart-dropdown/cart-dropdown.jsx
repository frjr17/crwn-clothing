import './cart-dropdown.styles.scss'
import Button from '../button'

export default function CartDropdown() {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}