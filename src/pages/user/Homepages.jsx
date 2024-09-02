// // src/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Learn Web</h1>
        <p className="text-xl mb-8">Your gateway to learning and growth.</p>
        <Link to="/courses">
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-lg">
            Browse Courses
          </button>
        </Link>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Learn with Us?</h2>
          <p className="text-lg mb-8">
            At Learnify, we offer a wide range of courses designed to help you enhance your skills and knowledge. Our expert instructors and engaging content make learning easy and enjoyable.
          </p>
          <Link to="/about">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Course Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src="./python-Course.webp" alt="Course" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Python Programing</h3>
                <p className="text-gray-700 mb-4">Learn the basics of React in this comprehensive course.</p>
                <Link to="/course-details/1">
                  <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
