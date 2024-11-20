import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.webp";
import blog4 from "../../assets/blog4.webp";
import blog5 from "../../assets/blog5.webp";
import blog6 from "../../assets/blog6.webp";
import blog7 from "../../assets/blog7.webp";
import blog8 from "../../assets/blog8.webp";

const Blog = () => {
    // Sample data for furniture items
    const furnitureItems = [
        {
            id: 1,
            title: "Upon of seasons earth dominion",
            date: "19 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image: blog1,
        },
        {
            id: 2,
            title: "Christmas Sale is here",
            date: "19 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image: blog2, 
        },
        {
            id: 3,
            title: "Nostro expetenda voluptatem sit ex",
            date: "19 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image:blog3 ,
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet",
            date: "19 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image: blog4 ,
        },
        {
            id: 5,
            title: "Nec intellegat deseruisse te",
            date: "19 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image: blog5 ,
        },
        {
            id: 6,
            title: "Viderer voluptatum te eum",
            date: "19 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image:  blog6,
        },
        {
            id: 7,
            title: "Item 7",
            date: "20 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image: blog7,
        },
        {
            id: 8,
            title: "Item 8",
            date: "21 Oct 2019",
            author: "Creative-Ishi Admin",
            description:
                "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.",
            image: blog8,
        },

    ];

    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const itemsPerPage = 6; // Number of items per page

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = furnitureItems.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(furnitureItems.length / itemsPerPage); // Total number of pages

    return (
        <>
            <Navbar />
            <div className="px-6 py-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Furniture</h1>
                </div>

                {/* Furniture Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems.map((item) => (
                        <div key={item.id} className="border rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    {item.date} &middot; {item.author}
                                </p>
                                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                <button className="text-yellow-400 font-semibold hover:underline">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-12 space-x-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)} // Update the current page
                            className={`border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 ${currentPage === index + 1 ? "bg-gray-300 font-bold" : ""
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
