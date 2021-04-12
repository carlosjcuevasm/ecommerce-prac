//layouts
import MainLayout from './pages/layouts/MainLayout';

//styling
import './App.scss';

//pages
import Homepage from './pages/views/Homepage';
import React, { useContext, useState } from 'react';

//import
import {globalContext, globalContextValues} from './AppContext';

//Routing
import {
  Link,
  Switch,
  Route,
} from "react-router-dom";

//Pages
import ShopWomen from './pages/views/Shop/ShopWomen';
import ShopMen from './pages/views/Shop/ShopMen';

function App() {

  const context = useContext(globalContext);
  
  
  const [isSigned,setSigned] = useState('false');
  function handleSignIn(result){
      alert('Context al rescate');
      setSigned(result);
  }
  const globalContex = React.createContext({
    login: isSigned,
    handleSignIn: handleSignIn,
  })

  return ( 
    <div className='container'>
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
    </div>
  );
}

export default App;
