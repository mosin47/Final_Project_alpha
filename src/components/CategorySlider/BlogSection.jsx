// BlogSection.jsx
import React, { useRef } from 'react';
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog1.png";
import blog5 from "../../assets/blog2.png";
import blog6 from "../../assets/blog3.png";

const blogs = [
  { id: 1, date: "29 August", title: "Viderer Voluptatum Te Eum", excerpt: "Nascetur ridiculus mus upon of seasons earth dominion...", imageUrl: blog1 },
  { id: 2, date: "29 August", title: "Lorem Ipsum Dolor Sit Amet", excerpt: "Nascetur ridiculus mus upon of seasons earth dominion...", imageUrl: blog2 },
  { id: 3, date: "29 August", title: "Upon Of Seasons Earth Dominion", excerpt: "Nascetur ridiculus mus upon of seasons earth dominion...", imageUrl: blog3 },
  { id: 4, date: "30 August", title: "Seasons of Earth Gathering", excerpt: "Nascetur ridiculus mus upon of seasons earth dominion...", imageUrl: blog1 },
  { id: 5, date: "31 August", title: "Dominion Gathering Light", excerpt: "Nascetur ridiculus mus upon of seasons earth dominion...", imageUrl: blog2 },
  { id: 6, date: "1 September", title: "Light of the World", excerpt: "Nascetur ridiculus mus upon of seasons earth dominion...", imageUrl: blog3 },
];

const BlogSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollAmount = 300 * 3;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-8">Our Latest Blog</h2>
      <div className="relative flex justify-center items-center">
        {/* Left arrow */}
       

        {/* Centered, scrollable blog container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-3 px-1 py-10"
          style={{ maxWidth: '1200px' }} // Fixed width to display exactly 3 items
        >
          {blogs.map(blog => (
            <div key={blog.id} className="min-w-[400px] border rounded-lg overflow-hidden shadow-lg">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-10">
                <div className="flex items-center mb-2">
                  <span className="bg-yellow-300 text-black text-sm px-2 py-1 rounded">{blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.excerpt}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-yellow-300 text-black px-4 py-2 rounded">Read More</button>
                  <span className="text-gray-500 text-sm flex items-center">
                    <i className="far fa-comment"></i> 0 Comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
       
      </div>
      <button
          onClick={scrollLeft}
          className="absolute right-1/2 z-10 bg-yellow-300 p-2 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute left-1/2 translate-x-1/2  z-10 bg-yellow-300 p-2 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
    </div>
  );
};

export default BlogSection;
