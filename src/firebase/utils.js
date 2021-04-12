//if this frows in size, transfer each service to its own module. Cuz the whole module is loaded!
//Just check if firebase is running or not.
//The good thign about this file structure architecture it aht all logic is already solved here, and just exposed the utilities to the modules that needs them.

//Firebase config
import firebaseConfig from './config';

//Firebase libreries
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css' 


//Must be initialized before using any FB service
//Development

firebase.initializeApp(firebaseConfig);



//FIREBASE UI
//Built from FB SDK. Helps streamlining the flow of sign in with a DOM form, styling,  sign-n in help, recover, register, and stuff. Nice Packge. Can be styled.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
//Configuring the firebase ui isntace to be run
var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          alert('Iniciaste Sesion!')
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        // document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl:'/',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    tosURL: '/',
    privacyPolicyUrl: '<your-privacy-policy-url>'
};
//Running the firebaseui instance to be exported
export function firebaseuiStart(){
    return ui.start('#firebaseui-auth-container', uiConfig);
} 

    
    