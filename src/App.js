import React from 'react';
import './styles/main.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import {ScrollToTop} from "./utils/scrollToTop";
import SelectedProject from "./pages/SelectedProject";
import Skills from "./pages/Skills";
import Education from "./pages/Education";


const App = () => {
    return (
        <div className='App'>
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='skills' element={<Skills/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path='project/:id' element={<SelectedProject/>}/>
                    <Route path='/education' element={<Education/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;