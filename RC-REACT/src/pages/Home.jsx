import React from "react";
import Preloader from "../components/Preloader";

import Mainheader2 from "../components/Mainheader2";
import Aboutgym from "../components/Aboutgym";
import Programs from "../components/Programs";
import Whatwedo from "../components/Whatwedo";
import Whychooseus from "../components/Whychooseus";
import Pricingplan from "../components/Pricingplan";
import Howitwork from "../components/Howitwork";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";




 function Home() {
  return (
    <>
    
    {/* <Preloader /> */}
    <Mainheader2 />
    <Aboutgym />
    <Programs />
    <Whychooseus />
    <Whatwedo />
    <Pricingplan />
    <Howitwork />
    <FAQs />
         </>
  )
}
export default Home;