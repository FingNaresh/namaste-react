import React from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    // Toggle this category
    setShowIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-6/12 my-4 mx-auto bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? '🔼' : '🔽'}</span>
      </div>

      {/* Accordion Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
