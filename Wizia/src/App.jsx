import './App.css'
import React from "react";
import Nav from "./components/Nav";  // Ensure the path is correct

import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Footer from "./components/Footer ";
import ErrorBoundary from './components/ErrorBoundary'

function App() {
    return (
        <div>
          <ErrorBoundary>
          <Nav/>
          </ErrorBoundary>
         
            
            <Hero />
            <Partners />
            <Features />
            <Footer />

         

        </div>
    );
}

export default App;

