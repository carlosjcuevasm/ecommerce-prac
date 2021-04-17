//if this frows in size, transfer each service to its own module. Cuz the whole module is loaded!
//Just check if firebase is running or not.
//The good thign about this file structure architecture it aht all logic is already solved here, and just exposed the utilities to the modules that needs them.

//Firebase config
import firebaseConfig from './config';

//Firebase libreries
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css' ;

//Could be in a separate module, but right now just fb auth cares about cookies
function storageAvailable(type) {
  
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      
      return true;
  }
  catch(e) {
      console.log(e.name, e.message)
      return false;
  }
}

//Must be initialized before using any FB service
firebase.initializeApp(firebaseConfig);


//Configuring the firebase ui isntace to be run
function uiConfigFunction(onSuccess){
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          if (onSuccess){
            onSuccess();
          }
        return false;
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
  return (uiConfig);
}
//Variable to check which persistance to use with auth. True defaults to LocalStorage.
let persistanceLocalStorage = true;

if (storageAvailable(persistanceLocalStorage ? 'localStorage' : 'sessionStorage')){
  var auth = firebase.auth()
  auth.setPersistence(persistanceLocalStorage ? 'local' : 'session');
  var ui = new firebaseui.auth.AuthUI(auth);
}

//Running the firebaseui instance to be exported
export function firebaseuiStart(successFunction){
  
  if (auth){
    console.log('hola')
    //FIREBASE UI
    //Built from FB SDK. Helps streamlining the flow of sign in with a DOM form, styling,  sign-n in help, recover, register, and stuff. Nice Packge. Can be styled.
    //reestructuer the firebaseui export cuz it wont run if browser is on disallow cookies, so the sign-in function must be disabled enterily.
    ui.start('#firebaseui-auth-container', uiConfigFunction(successFunction));
  }
  else {
    alert('Your browser is set to disallow all cookies. You wont be able to log in')
  }
} 
export function firebaseAuthSignout(successFunction){
  if (storageAvailable('localStorage')){
    firebase.auth().signOut()
  .then(function(){
    successFunction();
    
  
  }).catch(function(error){
    console.log('error logging out');
  });
  }
}

    
    