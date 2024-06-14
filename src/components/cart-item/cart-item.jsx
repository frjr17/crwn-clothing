import { CartItemContainer, CartItemImage, ItemDetailsContainer, ItemName } from './cart-item.styles';
export default function CartItem({ cartItem }) {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <CartItemContainer className="cart-item-container">
            <CartItemImage src={imageUrl} alt={name} />
            <ItemDetailsContainer className="item-details">
                <ItemName className="name">{name}</ItemName>
                <span className='price'>{quantity} x ${price.toFixed(2)}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}