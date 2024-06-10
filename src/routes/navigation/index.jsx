import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase";

export default function Navigation() {
    const { currentUser } = useContext(UserContext)


    return (
        <>
            <div className="navigation">
                <Link to='/' className="logo-container">

                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            <span onClick={signOutUser} className="nav-link">SIGN OUT</span>
                            :
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                    }

                </div>
            </div>
            <Outlet />
        </>
    )
}