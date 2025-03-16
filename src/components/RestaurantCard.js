import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resObj} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resObj?.info;
    const {deliveryTime}  = resObj.info.sla;
    return (
        <div className = "res-card">
            <img className = "res-card-img" alt = "res-log" src = {CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo} For Two</h4>
        </div>
    );
};

export default RestaurantCard;