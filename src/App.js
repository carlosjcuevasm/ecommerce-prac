//styling
import './App.scss';

//pages
import Homepage from './pages/views/Homepage';
import React, { useEffect, useState } from 'react';

//import
import {globalContext,} from './AppContext';

//Routing
import {
  Switch,
  Route,
} from "react-router-dom";

//Pages
import ShopWomen from './pages/views/Shop/ShopWomen';
import ShopMen from './pages/views/Shop/ShopMen';
import { render } from '@testing-library/react';
import { storageAvailable } from './utils';

//Utils...mostly delaing with browser settings

let configCookies = storageAvailable('localStorage');

function App() {

  //States   
  //Covers if not found, and if found. It resolves to a bool anyways.
  const [signed,setSigned] = useState(function(){
    if (configCookies){
      return localStorage.getItem('isSigned') === 'true';
    }
    else return false;
  });

  // On each render, if isSigned is modified, do this
  useEffect(function(){
    if (configCookies){
      localStorage.setItem('isSigned', signed);
    }
  }, [signed]);
  
  function handleSetSigned(result){
   setSigned(result);
  }
  

  

  return ( 
    <div className='container'>
      <globalContext.Provider value={{
        signed: signed,
        setSigned: setSigned,
        handleSignIn: handleSetSigned
      }}>
        <Switch>
          <Route exact path={`/shop-men`}>
              <ShopMen/>
          </Route>
          <Route exact path={`/shop-women`}>
              <ShopWomen/>
          </Route>
          <Route path= '/'>
            <Homepage/>
          </Route>
        </Switch>

      </globalContext.Provider>
      
    </div>
  );
}

export default App;
