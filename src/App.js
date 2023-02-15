import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Subheader from "./components/subheader/Subheader"
import Home from "./router/home/Home"
import Cart from "./router/cart/Cart"
import Like from "./router/like/Like"
import Footer from './components/footer/Footer';
import Admin from './router/admin/Admin'

import SingleRoute from './router/singleroute/SingleRoute';

function App() {
  return (
<div className="App">
  <Subheader/>
  <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/information/:id'element={<SingleRoute/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/like'element={<Like/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
