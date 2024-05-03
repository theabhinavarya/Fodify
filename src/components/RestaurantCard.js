import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 w-[250px] h-[300px] overflow-hidden rounded-lg transform transition-all duration-200 scale-100 hover:scale-90">
      <img
        className="rounded-xl w-full h-44"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold pt-2 pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {name}
      </h3>
      <h4 className="font-semibold pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {avgRating}⭐ • {deliveryTime} minutes
      </h4>
      <h4 className="pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {cuisines.join(", ")}
      </h4>
      <h4 className="pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {costForTwo}
      </h4>
    </div>
  );
};

// Higher order component
// input -> Res card ==> Output -> resCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="group">
        <label className="absolute z-10 bg-red-500 text-white mx-2 px-2 py-1 rounded group-hover:opacity-0">
          Promoted
        </label>
        {/* Destructuring the props because we are sending resData and Prototype, 
          console log props to see what exactly will pass if we simply pass this ahead */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
