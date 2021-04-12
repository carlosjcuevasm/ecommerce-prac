//React
import { useState, useRef, useEffect} from 'react';


//Styles
import './styles.scss'

//Components


//firebase services imports
import * as firebaseUtils from '../../../firebase/utils';

//Firebase services calls




function Navbar(props){
    //states
    const [isDisabled,setDisabled] = useState('false');
    const [signedInOccurred,setSignedInOccurred] = useState(false);
    const [signedIn, setSignedIn] = useState(false);

    
    //Dom references / Acess elements's DOM API
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

    //When user clicks the log in flow element initiator (A button right now)
    function signInHandler(){
        setDisabled(!isDisabled);//Show the log-in ux (by firebaseui right now)
        props.modalNotify();//Let parent now that the log-in flow started. Modal is a bad name...
        firebaseUtils.firebaseuiStart(function(){//The events I want to register if singing in is a sucess
            props.login(true);//All the way to root component
            setSignedInOccurred(true); //This handle side effects on this very same component due to the success
        }); 
    }
    async function signoutHandler(){
        await firebaseUtils.firebaseAuthSignout(function(){
            props.login(false);
            setSignedIn(false);
        });
    }
    
    useEffect(function(){
        //Check if log-in resulted in a sucess on the previous life-cycle.
        if (signedInOccurred){
            props.modalNotify();//Whatever the parent did on login-flow ontification, no  needed anymore
            setDisabled(!isDisabled);//Firebaseui dissapears automatically, so reset this state.
            setSignedIn(true);//This component do side effects if the user is currently signed in.
            setSignedInOccurred(false);  //On this state, no sign-in happended.
        }
    })

    return (
        <div>
            <div id='firebaseui-auth-container' className={'modal ' + (isDisabled ? '--disabled': null) }>
            
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