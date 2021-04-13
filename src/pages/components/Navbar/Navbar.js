//React
import { useState, useRef, useEffect} from 'react';

//Styles
import './styles.scss'

//Components


//firebase services imports
import * as firebaseUtils from '../../../firebase/utils';


function Navbar(props){
    //states intended for everyone
    const [signedInOccurred,setSignedInOccurred] = useState(false);
    const [signedIn, setSignedIn] = useState(false);

    //states that exist because of punctual interactions between components
    const [signInFlowHidden,setSignInFlowHidden] = useState(true);

    
    //Funcionamient del Navbar. Importado de entorno no react. 
    //Dom references / Acess elements's DOM API.
    const navbarMenuItem = useRef(null);
    const toggler = useRef(null);
    const navbarMenu = useRef(null);

    //When Navbar goes toggler mode
    function togglerHandler(){
        const navbarMenuNode = navbarMenu.current;
        const navbarMenuItemNode= navbarMenuItem.current;
            navbarMenuNode.classList.toggle('navbar__menu--responsive');
            for(let i = 0; navbarMenuItemNode.length;i++){
                
                navbarMenuItemNode[i].classList.toggle('navbar__menuItem--responsive');
            }
    }

    //When user clicks the log-in-flow initiator (A button right now)
    function signInHandler(){
        setSignInFlowHidden(!signInFlowHidden);//Show the log-in ux (by firebaseui right now)
        props.modalNotify();//Let parent now that the log-in flow started. Modal is a bad name...
        firebaseUtils.firebaseuiStart(function(){//The events I want to register if singing in is a sucess.Just happen if login is succes! Check utils!
            setSignedInOccurred(true); //This handle side effects on this very same component due to the success of log-in
        }); 
    }
    async function signoutHandler(){
        await firebaseUtils.firebaseAuthSignout(function(){
            props.login(false);
            setSignedIn(false);
        });
    }
    
    useEffect(function(){
        //Check if log-in resulted in a sucess on the previous life-cycle, so this state now must be true.
        if (signedInOccurred){
            props.login(true);//Utils notifies its events. This was moved from the 'util sucess notifier" becasue a notifier is enoguh. Thisis the right way based on state managment understading.
            props.modalNotify();//Whatever the parent did on login-flow initiation notification, no  needed anymore
            setSignInFlowHidden(!signInFlowHidden);//Firebaseui dissapears automatically, so reset this state.
            setSignedIn(true);//This component do side effects if the user is currently signed in. So notify it is signed in.
            setSignedInOccurred(false);  //On this life cycle, no sign-in happended.
        }
    })

    //Here just contiionally rendering things bsed on state.
    return (
        <div>
            <div id='firebaseui-auth-container' className={'modal ' + (signInFlowHidden ? '--disabled': null) }>
            
            </div>

            <nav className="navbar" style={{position: props.position}}>
            <a href="#" className="navbar__logo"> <h1 className="navbar__logoContent">BizLand<span className="navbar__logoContentSpan">.</span></h1></a>
            <ul className="navbar__menu" ref={navbarMenu}>
                <li className="navbar__menuItem"><button className="navbar__menuItemLink button --noBlur" href="#" 
                onClick={signedIn ? signoutHandler : signInHandler}>
                {signedIn ? 'Logout' : 'Login'} </button></li>
            </ul>
            <button className="navbar__toggler" ref={toggler} onClick={togglerHandler}>☰</button>
        </nav>
        </div>
            
        
    )
}

export default Navbar;