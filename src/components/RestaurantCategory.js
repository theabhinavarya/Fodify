import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordion Header */}
      <div className="w-1/2 mx-auto my-3 bg-gray-50 shadow-md p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems === true ? <span>▲</span> : <span>▼</span>}
        </div>
        {/* Accordion Body */}
        {showItems === true ? <ItemList items={data.itemCards} /> : null}
      </div>
    </div>
  );
};

export default RestaurantCategory;
