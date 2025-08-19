import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info || {};

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 text-center flex flex-col items-center 
                    transform transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
      <img 
        className="rounded-lg transition-transform duration-300 hover:scale-110" 
        alt="res-logo" 
        src={CDN_URL + cloudinaryImageId} 
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo }</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser} </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative inline-block">
        <label className="absolute top-2 left-2 bg-black text-white p-2 rounded-lg z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
