//React
import { useState, useRef, useEffect } from 'react';

//Web server
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui';

//Styles
import './styles.scss'

//Components
import Dropdown from '../Dropdown';
import Modal from '../Navbar';
import { getDefaultNormalizer } from '@testing-library/dom';


const firebaseConfig = {
    apiKey: "AIzaSyBh1lzK38eeZb-KZ25NrPIF35kYklmiKu4",
    authDomain: "ecommerce-prac-7fe32.firebaseapp.com",
    projectId: "ecommerce-prac-7fe32",
    storageBucket: "ecommerce-prac-7fe32.appspot.com",
    messagingSenderId: "938524694490",
    appId: "1:938524694490:web:9504b16aee753294edd2e3"
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().signInWithEmailAndPassword('prueba@gmail.com', 'prueba123')
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert('entro');
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

function Navbar(props){

   



    //states
    const [isDisabled,setDisabled] = useState('false')
    
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

    function modalHandler(){
        setDisabled(!isDisabled);
        
    }

    return (
        <div>
            <div id='firebaseui-auth-container' className={'modal ' + (isDisabled ? '--disabled': null) }>
            hola
            </div>
            <div id="loader">Loading...</div>
            <nav className="navbar" style={{position: props.position}}>
            <a href="#" className="navbar__logo"> <h1 className="navbar__logoContent">BizLand<span className="navbar__logoContentSpan">.</span></h1></a>
            <ul className="navbar__menu" ref={navbarMenu}>
                
                <li className="navbar__menuItem">
                   <Dropdown/>
            
                </li>
                <li className="navbar__menuItem"><button className="navbar__menuItemLink" href="#" onClick={modalHandler}>Login</button></li>
            </ul>
            <button className="navbar__toggler" ref={toggler} onClick={togglerHandler}>☰</button>
        </nav>
        </div>
            
        
    )
}

export default Navbar;