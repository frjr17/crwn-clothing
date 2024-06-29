import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { LogoContainer, NavLink, NavLinksContainer, NavigationContainer } from "./navigation.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/selectors";
import { selectIsCartOpen } from "../../store/cart/selectors";

export default function Navigation() {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
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