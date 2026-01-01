import './App.css';
import YourCart from "./Component/Small_business/Your_Cart.js"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import "./App.css"
import Viewdetail from "./Component/Small_business/View_detail.js";
import Newproduct from './Component/Small_business/New_Product.js';
import Orderdetail from './Component/Small_business/Order_detail.js';
import Request_detail from './Component/Small_business/Request_detail.js';
import Nustfruita_Login from './Component/Nustfruita/Nustfruita_login.js';
import Nustfruita_Admin from './Component/Nustfruita/Nustfruita_admin.js';
import Nustfruita_order_detail from './Component/Nustfruita/Nustfruita_order_detail.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<YourCart />} />
      <Route path="/yourcart" element={<YourCart></YourCart>}/>
      <Route path='/viewdetail' element={<Viewdetail></Viewdetail>}/>
      <Route path="/Newproduct" element={<Newproduct></Newproduct>}></Route>
      <Route path="/orderdetail" element={<Orderdetail></Orderdetail>}></Route>
      <Route path="/requestdetail" element={<Request_detail></Request_detail>}></Route>

      <Route path='/nustfruita' element={<Nustfruita_Login></Nustfruita_Login>}/>
      <Route path='/Nustfruita_admin' element={<Nustfruita_Admin></Nustfruita_Admin>}/>
      <Route path='/adminorderdetail' element={<Nustfruita_order_detail></Nustfruita_order_detail>}/>
    </Routes>
    <Footer></Footer>
    
    </BrowserRouter>
    </>
  );
}

export default App;
