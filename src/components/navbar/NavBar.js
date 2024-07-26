import { AppBar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import './navBar.scss'

const NavBar = () => {
    const pathname = useLocation().pathname;
    let backgroundColor;

    if (pathname === "/") {
        backgroundColor = 'transparent';
    } else {
        // backgroundColor = 'linear-gradient(to left, black, rgba(0, 0, 0, 0.7))';
        backgroundColor = "#232621"
    }

    const style = {
        background: backgroundColor
    }
    return (
        <AppBar className='navbarcontainer' style={style}>
            <div className='elements'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About Us</Link>
            </div>
        </AppBar>
    );
}

export default NavBar;