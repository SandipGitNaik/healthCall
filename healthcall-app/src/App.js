
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddToCart from './component/AddToCartComponent/AddToCart';

import Profile from './component/profileComponent/profileComponent';
import Register from './component/Register/Register';
function App() {
  return (
    <div className="App">
      <a href='/re'>Register</a> 
      <a href='/profile'>profile</a>
      <a href='/cart'>cart</a>
      <BrowserRouter>
      <Routes>
        <Route path="/re" element={<Register></Register>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/cart" element={<AddToCart></AddToCart>}></Route>
        </Routes>
        </BrowserRouter>
    <header>
      
    </header>
    </div>
  );
}

export default App;
