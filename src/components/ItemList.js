import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b border-gray-400 flex justify-between"
        >
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm">{item.card.info.name}</span>
            <span className="font-semibold text-sm">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="w-3/12 relative">
            <img
              className="w-full h-28 rounded-lg"
              alt={item.card.info.name}
              src={CDN_URL + item.card.info.imageId}
            />
            <div className="absolute bottom-[-4px] left-0 right-0 flex justify-center">
              <button
                className="p-2 bg-white shadow-md rounded-md text-green-600 hover:bg-green-600 hover:text-white duration-200"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
