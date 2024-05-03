import { useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Loading />;
  } else {
    const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
    const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info.sla;

    const categories =
      resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    return (
      <div className="text-center">
        <h1 className="font-bold mt-6 mb-2 text-2xl">{name}</h1>
        <p className="font-semibold text-lg">
          {cuisines.join(", ")} - 🕜 {deliveryTime} minutes
        </p>
        {/* Categories Accordions */}
        {categories.map((c, index) => (
          // this is a controlled component because we're controlling it from parent and it doesn't have its own state
          <RestaurantCategory
            key={c?.card?.card?.title}
            data={c?.card?.card}
            showItems={index === showIndex ? true : false} //this is telling the component, if the data should be showed or not
            setShowIndex={() =>
              showIndex === index ? setShowIndex(null) : setShowIndex(index)
            } //this is a function, which helps us update the index from child component in the parent component
          />
        ))}
      </div>
    );
  }
};

export default RestaurantMenu;
