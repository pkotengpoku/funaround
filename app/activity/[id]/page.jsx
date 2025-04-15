"use client"
import { useState } from 'react';

export default function ProductPage() {
  // State to manage the selected tab
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-8">
      {/* Product Image Section */}
      <div className="w-full mb-12">
        <img
          src="https://via.placeholder.com/1200x800"
          alt="Product"
          className="w-full h-[500px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Tab Navigation Section */}
      <div className="mb-8">
        <div className="flex space-x-8 border-b-2 border-gray-200">
          <button
            className={`pb-2 text-xl font-semibold ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`pb-2 text-xl font-semibold ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button
            className={`pb-2 text-xl font-semibold ${activeTab === 'specs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'}`}
            onClick={() => setActiveTab('specs')}
          >
            Specs
          </button>
        </div>
        <div className="mt-6">
          {/* Render the content based on the active tab */}
          {activeTab === 'description' && (
            <p className="text-gray-600 text-lg">
              Discover the ultimate experience with this product. It's designed with precision and built for performance. Whether you need it for work or play, this product is perfect for you. Crafted with high-quality materials and cutting-edge technology, it delivers everything you need in style.
            </p>
          )}
          {activeTab === 'reviews' && (
            <div>
              <p className="text-gray-600 text-lg">User Reviews:</p>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <p className="text-gray-600">Great product! Highly recommended.</p>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-yellow-500">★★★☆☆</span>
                  <p className="text-gray-600">Good quality but a bit expensive.</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'specs' && (
            <ul className="text-gray-600 text-lg space-y-2">
              <li><strong>Display:</strong> 15.6" Full HD</li>
              <li><strong>Processor:</strong> Intel i7 11th Gen</li>
              <li><strong>RAM:</strong> 16GB</li>
              <li><strong>Storage:</strong> 1TB SSD</li>
              <li><strong>Graphics:</strong> NVIDIA GTX 1660Ti</li>
            </ul>
          )}
        </div>
      </div>

      {/* Vendor Info Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Vendor Information</h3>
        <p className="text-gray-600">
          This product is provided by <strong>TechStore Inc.</strong>, a trusted vendor offering top-of-the-line products with exceptional customer service. Established in 2005, TechStore is committed to providing high-quality electronics at affordable prices.
        </p>
      </div>

      {/* Suggestions Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Suggestions</h3>
        <p className="text-gray-600 mb-4">
          We value your feedback! Let us know how we can improve our products and services.
        </p>
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your suggestions here..."
        />
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Submit Suggestion
        </button>
      </div>
    </div>
  );
}
