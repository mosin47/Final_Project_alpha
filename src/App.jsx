
import React from 'react';
import Index from './components/Index/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chair from './components/collections/Chair';
import Collections from './components/collections/Collections';
import Contact from './components/Contact/Contact';
import About from './components/Contact/About';
import Blog from './components/collections/Blog';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Furiture" element={<Chair />} />
        <Route path='/Collection' element={<Collections />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Blog' element={<Blog/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

