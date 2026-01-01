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
            
        </header>
        </>
    )
}

export default Header
