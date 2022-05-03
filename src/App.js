import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterApp from './components/Footer/footer';
import HeaderApp from './components/Header/header';
import PageHome from './components/PageHome/home';

function App() {
  return (
    <div className="App">
      <div className='Header-App'>
        <HeaderApp />
      </div>

      <div className='Main-App'>
        <Routes>
          <Route path='/' element={<PageHome />} />
        </Routes>
      </div>

      <div className='Footer-App'>
        <FooterApp />
      </div>
    </div>
  );
}

export default App;
