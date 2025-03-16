import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

// not using keys (not acceptable) <<< using indexes as key (not recommended) <<< using unique key (recommended)
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className ="body">
           <div className = "search">Search</div>
           <div className = "filter">
            <button className="filter-button" onClick = {() => {
                        console.log("Button Clicked")
                        const filteredList = listOfRestaurants.filter((resObj) => resObj.info.avgRating > 4.5);
                        console.log(filteredList);
                        setListOfRestaurants(filteredList);
                    }
                }>
                Top Restaurants
            </button>
           </div>
           <div className = "restaurant-container">
            {listOfRestaurants.map((resObj) => <RestaurantCard key = {resObj.info.id} resObj = {resObj}></RestaurantCard>)}
            </div> 
        </div>
    );
};

export default Body;