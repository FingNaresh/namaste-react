import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  const[showIndex , setShowIndex] = useState(null);

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

      // console.log("resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((card) => card?.card?.card?.itemCards)?.card?.card?.itemCards");
      
      const categories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      // console.log(categories);

      

  return (
    <div className="text-center">
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines?.join(", ")} - {costForTwoMessage}</p>
      {/*  categories accordians*/}
        {categories.map((category, index)=>(
          // Controlled Component
          <RestaurantCategory 
          key={category?.card?.card.title} 
          data={category?.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
          />
        ))} 
    </div>
  );
};

export default RestaurantMenu;
