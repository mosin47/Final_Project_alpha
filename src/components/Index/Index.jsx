import Home from "../Home/Home";
import Testimonial from "../Testimonial/Testimonial";
import ProductSection from "../Product/ProductSection";
import Banner from "../Banner/Banner";
import ProductGallery from "../Product/ProductGallery";
import ProductSlide from "../Product/ProductSlide";
import Newsletter from "../Banner/NewsLatter";
import BlogSection from "../CategorySlider/BlogSection";
import LogoSlider from "../Logo/LogoSlider";
import Footer from "../Footer/Footer";
// import CategorySlider from "./components/CategorySlider/TopCategories";

export default function Index() {
  return (
   <>
  <Home/>
  <Testimonial/>
  <ProductSection/> 
  <Banner/>
<ProductGallery/>
<ProductSlide/>
<Newsletter/>
<BlogSection/>
<LogoSlider/>
<Footer/>

   </>
   
  );
}
