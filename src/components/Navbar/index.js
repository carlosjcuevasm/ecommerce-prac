import { useRef } from 'react';
import './styles.scss'

//components
import Dropdown from '../Dropdown';

function Navbar(props){
    
    const navbarMenuItem = useRef(null);
    const toggler = useRef(null);
    const navbarMenu = useRef(null);

    function togglerHandler(){

        const navbarMenuNode = navbarMenu.current;
        const navbarMenuItemNode= navbarMenuItem.current;
        
            navbarMenuNode.classList.toggle('navbar__menu--responsive');
            for(let i = 0; navbarMenuItemNode.length;i++){
                
                navbarMenuItemNode[i].classList.toggle('navbar__menuItem--responsive');
            }
    }
    

    return (
        <nav className="navbar" style={{position: props.position}}>
            <a href="#" className="navbar__logo"> <h1 className="navbar__logoContent">BizLand<span className="navbar__logoContentSpan">.</span></h1></a>
            <ul className="navbar__menu" ref={navbarMenu}>
                <li className="navbar__menuItem navbar__menuItem--active" ref={navbarMenuItem}><a className="navbar__menuItemLink navbar__menuItemLink--active" href="#">Home</a></li>
                <li className="navbar__menuItem"><a className="navbar__menuItemLink" href="#">News</a></li>
                <li className="navbar__menuItem"><a className="navbar__menuItemLink" href="#">Contact</a></li>
                <li className="navbar__menuItem">
                   <Dropdown/>
            
                </li>
                <li className="navbar__menuItem"><a className="navbar__menuItemLink" href="#">About</a></li>
            </ul>
            <button className="navbar__toggler" ref={toggler} onClick={togglerHandler}>☰</button>
        </nav>
    )
}

export default Navbar;