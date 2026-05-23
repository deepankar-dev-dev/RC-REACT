import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Mainheader from './components/Mainheader';
import Headerimg from './components/Headerimg';
import Footer from './components/Footer';
import Programs from './pages/Programs';
import Pages from './pages/Pages';
import Contactus from './pages/Contactus';
import Programdetails from './pages/programdetails';
import Trainers from './pages/Trainers';
import Trainerdetails from './pages/Trainerdetails';
import Pricing from './pages/Pricing';
// import Gallery from './pages/gallery';
import Mainheader3 from './components/Mainheader3';
import Pageheader from './components/Pageheader';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './pages/Gallery';
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<>
          <Headerimg />
          <Mainheader />
          <Home />
        </>} />
        <Route path="/home" element={<>
          <Headerimg />
          <Mainheader />
          <Home />
        </>
        } />
        <Route path="/about" element={
          <>
            <Mainheader3 />
            <Pageheader title="About Us" key="About Us"  /> 
            <About />
          </>
        } />
        <Route path="/programs" element={
          <>
            <Mainheader3 />
            <Pageheader title="Our Programs" key="Our Programs"  /> 
            <Programs  />
          </>
        } />
         <Route path="/pages" element={
          <>
            <Mainheader3 />
            <Pageheader title="Pages"  key="Pages" /> 
            <Pages />
          </>
        } />
        <Route path="/program-details" element={
          <>
             <Mainheader3 />
            <Pageheader title="Strength Training" key="Strength Training"  /> 
            <Programdetails />
          </>
        } />
        <Route path="/trainers" element={
          <>
             <Mainheader3 />
            <Pageheader title="Our Trainer"  key="Our Trainer" /> 
            <Trainers />
          </>
        } />
         <Route path="/trainer-details" element={
          <>
            <Mainheader3 />
            <Pageheader title="Mr. Rahul Chaudhary"  key="Mr. Rahul Chaudhary"  /> 
            <Trainerdetails />
          </>
        } />
         <Route path="/pricing" element={
          <>
            <Mainheader3 />
            <Pageheader title="Pricing Plans" key="Pricing Plans" /> 
            <Pricing />
          </>
        } />
        <Route path="/gallery" element={
          <>
            <Mainheader3 />
            <Pageheader title="Our Gallery"  key="Our Gallery"  /> 
            <Gallery />
          </>
        } />
         <Route path="/contact" element={
          <>
            <Mainheader3 />
            <Pageheader title="Contact Us" key="Contact Us"  /> 
            <Contactus />
          </>
        } />
      </Routes>
      <Footer />
    </>
  );
}

