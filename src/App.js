import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'; 
import Wave from './components/concentric' 
import Recomendation from './components/Recommendation' 



function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      
        <div className="App">
          <Header />
          
          {/* Hero Section */}
          <Hero />

          {/* Features and Testimonials sections */}
        
          
          <Features/>
          <Wave/>
          <Recomendation/>
          <Testimonials />
          
          {/* Routing for Profile Page */}
          

          {/* Footer Section */}
          <Footer />
        </div>
      
    </GoogleOAuthProvider>
  );
}

export default App;
