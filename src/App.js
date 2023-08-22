import './App.css';
import Header from './component/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import Banner from './component/Banner';
import Converter from './component/Converter';
import {  Route, Routes } from 'react-router-dom';
import  Wallet  from './component/Wallet/Wallet';
import Qr from './component/Wallet/Qr';
import Footer from './component/Footer';

function App() {
  return (
   <>
   <Header/>
      <Banner/>
    <Routes>
    <Route path="*" element={<h1 className="text-center">404 Not Found</h1>}/>
      <Route  path="/" Component={Converter}/>
      <Route  path="/Converter" Component={Converter}/>
      <Route  path="/wallet" Component={Wallet}/>
      <Route  path="/wallet/qr" Component={Qr}/>

   </Routes>
   <Footer/>
      
   </>
  );
}

export default App;
