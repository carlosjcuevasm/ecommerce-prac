//layouts
import MainLayout from './pages/layouts/MainLayout';

//styling
import './App.scss';

//pages
import Homepage from './pages/views/Homepage';
import { useState } from 'react';

function App() {

  const [isSigned,setSigned] = useState('false');
  function handleSignIn(){
    
  }

  return (
    
      <Homepage/>
    
  );
}

export default App;
