import React from 'react';

// Example child components with hover animation
const Fruits = () => (
  <div className="bg-green-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-bold mb-2 text-green-700">Fruits</h2>
    <p>Apples, Bananas, Oranges...</p>
  </div>
);

const Vegetables = () => (
  <div className="bg-yellow-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-bold mb-2 text-yellow-700">Vegetables</h2>
    <p>Carrots, Spinach, Tomatoes...</p>
  </div>
);

const Snacks = () => (
  <div className="bg-pink-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-bold mb-2 text-pink-700">Snacks</h2>
    <p>Chips, Cookies, Nuts...</p>
  </div>
);

const Grocery = () => {
  const sections = [<Fruits key="1" />, <Vegetables key="2" />, <Snacks key="3" />];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4 animate-pulse">
          Our Grocery Online Store
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Explore our fresh and tasty products!
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sections.map((Section) => Section)}
      </main>
    </div>
  );
};

export default Grocery;
