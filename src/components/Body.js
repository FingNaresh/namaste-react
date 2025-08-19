import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

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

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-600 mt-10">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-4">
      {/* Filter Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="border border-black px-3 py-2 w-64 rounded-lg"
            value={searchText}
            placeholder="Search by restaurant name"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors duration-300"
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

        <button
          className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors duration-300"
          onClick={() => {
            const topRatedList = listOfRestaurants.filter(
              (res) => res.info?.avgRating > 4
            );
            setFilteredRestaurants(topRatedList);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="flex items-center gap-2">
          <label className="font-semibold">UserName:</label>
          <input
            className="border border-black p-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurants List */}
      {filteredRestaurants.length === 0 ? (
        <p className="text-center text-gray-500">No restaurants found.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
