import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json?.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.find(
      (card) => card?.card?.card?.info
    )?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find((card) => card?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
