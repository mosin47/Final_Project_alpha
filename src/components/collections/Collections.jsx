import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import collection1 from '../../assets/collection1.webp';
import collection2 from '../../assets/collection2.webp';
import collection3 from '../../assets/collection3.webp';
import collection4 from '../../assets/collection4.webp';
import collection5 from '../../assets/collection5.webp';
import collection6 from '../../assets/collection6.webp';

const collections = [
  { name: 'CHAIR', items: 11, imageUrl: collection1 },
  { name: 'FURNITURE', items: 19, imageUrl: collection2 },
  { name: 'NEW_FURNITURE', items: 19, imageUrl: collection3 },
  { name: 'TABLE', items: 12, imageUrl: collection4 },
  { name: 'SPECIAL_FURNITURE', items: 8, imageUrl: collection5 },
  { name: 'SOFA', items: 12, imageUrl: collection6 },
];

const Collections = () => {
  return (
    <>
    <Navbar />
    <div className="p-4 mx-10 px-10 m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {collections.map((collection, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={collection.imageUrl}
            alt={collection.name}
            className="w-full  object-cover"
            />
          <div className="p-4 flex justify-between items-center">
            <h3 className="text-lg font-bold">{collection.name}</h3>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
              {collection.items} Item{collection.items > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      ))}
    </div>
    <Footer />
      </>
  );
};

export default Collections;