import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
export default function Navigation() {

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
                    <Link className="nav-link" to="/sign-in">
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}