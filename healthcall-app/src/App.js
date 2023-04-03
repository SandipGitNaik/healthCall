
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddToCart from './component/AddToCartComponent/AddToCart';

import Profile from './component/profileComponent/profileComponent';
import Register from './component/Register/Register';
import Menu from './component/MenuComponent/Menu';
import MenuComponents from './component/MenuComponent/Menu';
function App() {
  return (
    <div className="App">
      <header>
    <MenuComponents></MenuComponents>
    </header>
      <BrowserRouter>
      <Routes>
        
        <Route path="/re" element={<Register></Register>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/cart" element={<AddToCart></AddToCart>}></Route>
        </Routes>
        </BrowserRouter>
   
    </div>
  );
}

export default App;
