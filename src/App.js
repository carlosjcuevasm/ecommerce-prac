//layouts
import MainLayout from './layouts/MainLayout';

//styling
import './App.scss';

//pages
import Homepage from './pages/Homepage';

function App() {
  return (
    <MainLayout>
      <Homepage/>
    </MainLayout>
  );
}

export default App;
