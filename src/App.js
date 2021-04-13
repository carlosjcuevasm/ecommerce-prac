//styling
import './App.scss';

//pages
import Homepage from './pages/views/Homepage';
import React, { useState } from 'react';

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

function App() {

  
  
  //States   
  const [isSigned,setSigned] = useState(false);
  
  function handleSetSigned(result){
   setSigned(result);
  }
  

  return ( 
    <div className='container'>
      <globalContext.Provider value={{
        signedIn: isSigned,
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
