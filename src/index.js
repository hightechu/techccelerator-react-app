import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bootstrap and custom style imports
// You can use any Bootstrap styles as you would in vanilla CSS/HTML
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';

// Components imports for routing
// Each of these components is a different "page"
// You do not need to import any components that you aren't using as a "page." Notice that I did not add Login here!
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import About from "./components/About";
import App from './App';
import AddDataSample from './components/AddDataSample';

import Navigation from "./components/Navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering your app...
// Adding navigation bar to every page. Could add a footer using the same concept
// Components rendered as pages - URL/about shows you the About component, etc...
// Add your own routes after ln 38
root.render(
  <React.StrictMode>
    <BrowserRouter>
        < Navigation />
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/home' element={<UserHome/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/adddatasample' element={<AddDataSample/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

