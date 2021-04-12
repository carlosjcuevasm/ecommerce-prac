//React
import { useState, useRef} from 'react';


//Styles
import './styles.scss'

//Components


//firebase services imports
import * as firebaseUtils from '../../../firebase/utils';

//Firebase services calls




function Navbar(props){
    //states
    const [isDisabled,setDisabled] = useState('false');

    
    //Dom references / Acess elements's DOM API
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

    function loginHandler(){
        setDisabled(!isDisabled);
        props.modalNotify(); 
        firebaseUtils.firebaseuiStart(); 
        props.login();
    }

    return (
        <div>
            <div id='firebaseui-auth-container' className={'modal ' + (isDisabled ? '--disabled': null) }>
            
            </div>

            <nav className="navbar" style={{position: props.position}}>
            <a href="#" className="navbar__logo"> <h1 className="navbar__logoContent">BizLand<span className="navbar__logoContentSpan">.</span></h1></a>
            <ul className="navbar__menu" ref={navbarMenu}>

                <li className="navbar__menuItem"><button className="navbar__menuItemLink button --noBlur" href="#" onClick={loginHandler}>Login</button></li>
            </ul>
            <button className="navbar__toggler" ref={toggler} onClick={togglerHandler}>☰</button>
        </nav>
        </div>
            
        
    )
}

export default Navbar;