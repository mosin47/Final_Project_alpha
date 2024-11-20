import React from 'react';
import model1 from '../../assets/assects (14).png';
import deal1 from '../../assets/assects (16).png';
import deal2 from '../../assets/assects (17).png';




const Testimonial = () => {
    return (
        <div className="container mx-auto w-max p-4">
            {/* Main Div: Flex Container */}
            <div className="flex flex-col lg:flex-row gap-6">

                {/* Testimonials Section */}
                <div className="flex-1 px-10 bg-yellow-200 p- rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 mt-5">Our Testimonials</h2>
                    <div className="flex items-center justify-center py-3">
                        <img src={model1} alt="User" className="" />
                    </div>
                </div>
                {/* Promotional Banners and Services Section */}
                <div className="flex-2 flex flex-col gap-6">
                    {/* Promotional Banners (in a row) */}
                    <div className="flex gap-4 ">

                        <div className="w-1/2">
                            <div>
                                <img src={deal1} alt="User" className="" />
                            </div>
                        </div>
                        <div className="w-1/2 ">
                            <img src={deal1} alt="User" className="mr-4" />
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="flex flex-wrap justify-around bg-blue-100 p-4 rounded-lg shadow-lg">
                        <div className="text-center">
                            <p className="font-semibold">Free Shipping</p>
                            <p className="text-sm">Order Over $99</p>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold">Money Back</p>
                            <p className="text-sm">With a 30 Days</p>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold">Help Center</p>
                            <p className="text-sm">Support System 24/7</p>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold">Special Gift Card</p>
                            <p className="text-sm">Give A Perfect Gift</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial; 
