//layouts
import MainLayout from './layouts/MainLayout';

//styling
import './App.scss';

//pages
import Homepage from './pages/Homepage';
import { useState } from 'react';

function App() {

  const [isSigned,setSigned] = useState('false');
  function handleSignIn(){
    
  }

  return (
    <MainLayout>
      <Homepage/>
    </MainLayout>
  );
}

export default App;
