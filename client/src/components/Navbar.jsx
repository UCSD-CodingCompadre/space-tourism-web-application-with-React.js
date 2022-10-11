import './styles/Navbar.css';
import {NavLink} from 'react-router-dom';
import CloseIcon from '../assets/shared/icon-close.svg';
import Hamburger from '../assets/shared/icon-hamburger.svg';
import Logo from '../assets/shared/logo.svg';

export const Navbar = () =>
{

    const openSideBar = () =>
    {
        const sideBar = document.getElementById('side-bar');
        sideBar.style.top = '0px';
    }

    const closeSideBar = () =>
    {
        const sideBar = document.getElementById('side-bar');
        sideBar.style.top = '-100vh';
    }

    return (
        <div className="Navbar">
            <section 
            className="component"
            >
                <img  
                alt="logo" 
                className="logo" 
                src={Logo}
                />
                <img  
                alt="hamburger" 
                className="hamburger-icon"
                onClick={openSideBar}
                src={Hamburger}
                />
            </section>
            <section 
            className="mobile-side-bar"
            id="side-bar"
            >
                <img  
                alt="close" 
                className="close-icon"
                onClick={closeSideBar}
                src={CloseIcon}
                />
                <NavLink
                className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                id="first-link"
                to="/home"
                >
                    00 Home
                </NavLink>
                <NavLink
                className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                to="/destination"
                >
                    01 Destination
                </NavLink>
                <NavLink
                className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                to="/crew"
                >
                    02 Crew
                </NavLink>
                <NavLink
                className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                to="/technology"
                >
                    03 Technology
                </NavLink>
            </section>
        </div>
    )
}