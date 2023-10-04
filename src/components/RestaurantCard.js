import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;
    return (
        <div className="res-card">
            <img className="food-img" alt="food-img" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h6>{costForTwo}</h6>
            {/* <h6>{resData.info.sla.deliveryTime} minutes</h6> */}
        </div>
    );
};
export default RestaurantCard;