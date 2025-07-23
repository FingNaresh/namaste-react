import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  

  const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5047411&lng=77.2010206&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants = json?.data?.cards
        ?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants || []);
      setFilteredRestaurants(restaurants || []);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus ===false)
    return (
    <h1>
      Looks like you're offline !! Please check your internet connection;
      </h1>
    );

    const {loggedInUser,setUserName}= useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className='search m-4 p-4'>
          <input
            type="text"
            className='border border-solid border-black px-3 py-2 w-64 '
            value={searchText}
            placeholder="Search by restaurant name "
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className='search m-4 p-4 flex items-center'>
          <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const topRatedList = listOfRestaurants.filter(
              (res) => res.info?.avgRating > 4
            );
            setFilteredRestaurants(topRatedList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
         <div className='search m-4 p-4 flex items-center'>
          <label>UserName : </label>
         <input className='border border-black p-2'
         value={loggedInUser}
         onChange={(e)=>setUserName(e.target.value)}
         />
        </div>

      </div>
      <div className=" flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
          key={restaurant.info.id}  
          to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant}/>
            ):(
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
