import logo from '../assets/neospace2.png';
import "../Style/Header.css"
import { FiShoppingBag } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";



function Header(){
    return (
        <>
        <header className='header'>
            <div className='headerimg'>
                <img src={logo} className='logo' alt="NeoSpace logo"/>
            </div>
            <div className='header_icons'>
                <Link to="/" className='header_icon_link'>
                    <FaHome />
                </Link>
                <Link to="/profile" className='header_icon_link'>
                    <BsPersonCircle />
                </Link>
                <Link to="/yourcart" className='header_icon_link'>
                    <FiShoppingBag />
                </Link>
            </div>
        </header>
        </>
    )
}

export default Header
