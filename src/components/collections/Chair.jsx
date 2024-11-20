import React from 'react';
import CategorySidebar from './CategorySidebar';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import PromoBanner from './PromoBanner';
import Navbar from '../Navbar/Navbar';
import BannerSlider from './BannerSlider';
import SpecialProductsSlider from './SpecialProductsSlider';
import Footer from '../Footer/Footer';

const Chair = () => {
  return (
   <>
    <Navbar />
   <div className="flex mx-48 mt-10 space-x-6">
      <div className="w-1/4 space-y-4">
        <CategorySidebar />
        <FilterSidebar />
        <BannerSlider />
        <SpecialProductsSlider />
      </div>
      <div className="w-3/4">
        <PromoBanner />
        <ProductGrid />
      </div>
    </div>
    <Footer />
    </>

  );
};

export default Chair;
