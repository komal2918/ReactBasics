import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// not using keys (not acceptable) <<< using indexes as key (not recommended) <<< using unique key (recommended)
const Body = () => {
    return (
        <div className ="body">
           <div className = "search">Search</div>
           <div className = "restaurant-container">
            {resList.map((resObj) => <RestaurantCard key = {resObj.info.id} resObj = {resObj}></RestaurantCard>)}
            </div> 
        </div>
    );
};

export default Body;