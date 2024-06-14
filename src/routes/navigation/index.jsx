import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { CartContext } from "../../contexts/cart";
import { LogoContainer, NavLink, NavLinksContainer, NavigationContainer } from "./navigation.styles";

export default function Navigation() {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    return (
        <>
            <NavigationContainer className="navigation">
                <LogoContainer to='/' className="logo-container">

                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            <NavLink as='span' onClick={signOutUser} className="nav-link">SIGN OUT</NavLink>
                            :
                            <NavLink className="nav-link" to="/auth">
                                SIGN IN
                            </NavLink>
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}