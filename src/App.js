import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterApp from './components/Footer/footer';
import HeaderApp from './components/Header/header';
import PageNotFound from './components/Page404/PageNotFound';
import PageAvatar from './components/PageAvatar/PageAvatar';
import PageBrowse from './components/PageBrowse/PageBrowse';
import PageHome from './components/PageHome/home';
import PageSignIn from './components/PageSignIn/signIn';

function App() {
  return (
    <div className="App">
      <div className='Header-App'>
        <HeaderApp />
      </div>

      <div className='Main-App'>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/signIn' element={<PageSignIn />} />
          <Route path='/avatar' element={<PageAvatar />} />
          <Route path='/browse' element={<PageBrowse />}/>

          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </div>

      <div className='Footer-App'>
        <FooterApp />
      </div>
    </div>
  );
}

export default App;
