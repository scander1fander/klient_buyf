import './App.css';
import Firstpage from './pages/firstpage';
import Pattern from './img/Pattern.png';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/catalog';
import About from './pages/about';
import Shapka from './components/Shapka';
import Footer from './components/Footer';
import Tovar from './pages/Tovar';
import Registration from './pages/Registration';
import Authorization from './pages/Authorization';
import Roses from './components/Roses';
import Hriz from './components/Hriz';
import Lilies from './components/Lilies';
import Tulps from './components/Tulps';
import Comps from './components/Comps';
import Toys from './components/Toys';


function App() {
  const isFooterVisible = window.location.pathname !== '/register' && window.location.pathname !== '/auth';
  const isShapkaVisible = window.location.pathname !== '/auth' && window.location.pathname !== '/register';
  return (
    <div style={{backgroundImage: `url(${Pattern})`}}>
    <Router>
      {isShapkaVisible && <Shapka />}
      <Routes>
        <Route path='/' element={<Firstpage/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/roses' element={<Roses />}/>
        <Route path='/hriz' element={<Hriz />}/>
        <Route path='/lilies' element={<Lilies />}/>
        <Route path='/tulps' element={<Tulps />}/>
        <Route path='/toys' element={<Toys />}/>
        <Route path='/comps' element={<Comps />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tovar' element={<Tovar/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/auth' element={<Authorization/>}/>
      </Routes>
      {isFooterVisible && <Footer />}
  </Router>
  </div>
  );

}

export default App;
