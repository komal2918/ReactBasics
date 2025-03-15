import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"></img>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className = "res-card">
            <img className = "res-card-img" alt = "res-log" src = "https://b.zmtcdn.com/data/pictures/8/20274588/281c1326d90a6b5d70ad3a2542a7b87d_o2_featured_v2.jpg"></img>
           <h3>Meghana Foods</h3>
           <h4>Biryani, North Indian, Asian </h4>
           <h4>4.4 stars</h4>
           <h4>38 minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className ="body">
           <div className = "search">Search</div>
           <div className = "restaurant-container">
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            <RestaurantCard></RestaurantCard>
            </div> 
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className = "app">
            <Header></Header>
            <Body></Body>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)