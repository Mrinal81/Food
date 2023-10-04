import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterReasturant, setFilterRestaurant] = useState([]);

    const [searchText, SetSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        // optional chaining
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // conditional Rendering
    // if (listOfRestaurant.length === 0) {
    //     return (
    //         <Shimmer />
    //     );
    // };

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="search-cont">
                <div className="search">
                    <input type="text" className="searchBox" value={searchText} onChange={(e) => {
                        SetSearchText(e.target.value);
                    }}></input>
                    <button className="input-search" onClick={() => {
                        const filterReasturant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListOfRestaurant(filterReasturant);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filterList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        console.log(filterList);
                        setListOfRestaurant(filterList);
                    }} >
                    Top Rated Restaurant
                </button>
            </div >
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}

            </div>
        </div >
    );
};
export default Body;