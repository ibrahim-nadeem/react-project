 // App.jsx
 
import Navbar from './components/header/navbar';  // No curly braces needed for default export
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/header/aboutus.jsx" // ✅ Correct path
import CarDetails from './components/header/cardetail.jsx';


 
 

 import  Carousel from './components/header/carousel.jsx'
 
 
import Footer from './components/header/footer/footer.jsx';
import { Modal } from 'react-bootstrap';
import SearchBar from './components/header/searchbar.jsx';
import CarCategories from './components/header/carcategories.jsx';
import Example from './components/header/login.jsx';
import Example1 from './components/header/signup.jsx';
import Contact from './components/header/contact.jsx';
import UserDashboard from './components/header/userdashboard.jsx';
import EmailVerification from './components/header/emailverification.jsx';
 
 
 
 
 
 
 
 
 

 
 

const App = () => {
  return (
    
          <>
          <div style={{textAlign:'right'}}>
            <Example/>
            <Example1/>
          </div>
        
     
      <div>
      <Router>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cardetail"element={<cardetails/>} />
        <Route path="/contactus" element={<contactus/>}/>
         
      </Routes>
    </Router>
          
        
        {/* <LoginForm/> */}
        {/* <LoginForm/> */}
      {/* <Button/> */}
      
      
        <Navbar />  {/* This will render the Navbar component */}
        <Carousel />  {/* This will render the Carousel component */}
         <SearchBar/>
          <CarCategories/>
          
         
        
          {/* <CarList/> */}
          <AboutUs/>
          <CarDetails/>
          <Contact/>
          <UserDashboard/>
          <EmailVerification/>
         
       
           
        <Footer/>
        {/* Add any routes you want here */}
        <Modal/>
       

        
      </div>
      </>
      
     
  );
};

export default App;

