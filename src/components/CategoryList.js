import React from "react";

function CategoryList({ data }) {
  const { name, finalPrice, price, description } = data.card.info;
  console.log(data);
  return (
    <div className="w-[900px] bg-slate-200 m-4 p-4 flex justify-between items-center rounded-lg">
      <div className="text-left">
        {name} : ₹ {finalPrice || price / 100} /-
        <div className="text-sm my-2">{description}</div>
      </div>
      <div className="">
        <img
          className="w-[150px] h-[100px] rounded-lg shadow-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            data?.card?.info?.imageId
          }
          alt="mealImage"
        />
      </div>
    </div>
  );
}

export default CategoryList;
