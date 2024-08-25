import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import ReactiveMe from './products/reactive-me-dyes.js';
import MyTable from './products/reactive-he-dyes.js';
import RRDDyes from './products/rgb-rr-dyes.js';
import VinylSulphone from './products/vinylsulphone-dyes.js';
import PremiumDyes from './products/premium-dyes.js';
import DirectDyes from './products/direct-dyes.js';
import ReactiveCold from './products/reactive-cold-dyes.js';
import './App.css';
import PrintingDyes from './products/printing-dyes.js';
import PigmentAuxi from './products/pigmentauxiliares.js';
import PigmentDyes from './products/pigment-dyes.js';
import DisperseDyes from './products/disperse-dyes.js';
import AcidBaseDyes from './products/AcidBase.js';
import NaptholBase from './products/napthol-base.js';
import Contact from './components/Contact.js';
import RD from './components/R&D.js';
import EnquireForm from './components/EnquireForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/reactive-me-dyes" element={<ReactiveMe />} />
                <Route path="/products/reactive-he-dyes" element={<MyTable />} />
                <Route path="/products/rgb-rr-dyes" element={<RRDDyes />} />
                <Route path="/products/vinylsulphone-dyes" element={<VinylSulphone />} />
                <Route path="/products/premium-dyes" element={<PremiumDyes />} />
                <Route path="/products/direct-dyes" element={<DirectDyes />} />
                <Route path="/products/reactive-cold-dyes" element={<ReactiveCold />} />
                <Route path="/products/printing-dyes" element={<PrintingDyes />} />
                <Route path="/products/pigmentauxiliares" element={<PigmentAuxi />} />
                <Route path="/products/pigment-dyes" element={<PigmentDyes />} />
                <Route path="/products/disperse-dyes" element={<DisperseDyes />} />
                <Route path="/products/AcidBase" element={<AcidBaseDyes />} />
                <Route path="/products/napthol-base" element={<NaptholBase />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path='/EnquireForm' element={<EnquireForm/>}/>
                <Route path='/rnd' element={<RD/>}/>
            </Routes>
        </Router>
    );
}

export default App;
