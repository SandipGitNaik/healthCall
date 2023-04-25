
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddToCart from './component/AddToCartComponent/AddToCart';

import Profile from './component/profileComponent/profileComponent';
import Register from './component/Register/Register';
import Menu from './component/MenuComponent/Menu';
import MenuComponents from './component/MenuComponent/Menu';
import FooterComponent from './component/Footer/Footer';
import Carousel from './component/Carousel/Carousel';
import Login from './component/Login/Login';
import Forgotcomponent from './component/ForgetPass/Forgot';

import TestListComponent from './component/Testlist/Testlist';
import TestIndividualComponent from './component/Testindivdual/Testindivdual';
import Home from './component/HomePage/Home';

function App() {
  return (
    <div className="App">
      <header>
    <MenuComponents></MenuComponents>
   
    
         </header>
   
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
        <Route path="/re" element={<Register></Register>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/cart" element={<AddToCart></AddToCart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/forgot' element={<Forgotcomponent/>}></Route>
         <Route path='/test' element={<TestIndividualComponent/>}></Route>
         <Route path='/testList' element={<TestListComponent/>}></Route>
        </Routes>
        </BrowserRouter>
   <footer>
   <FooterComponent> </FooterComponent>

   </footer>
    </div>
  );
}

export default App;
