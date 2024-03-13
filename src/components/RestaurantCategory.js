import React, { useState } from "react";
import CategoryList from "./CategoryList";

function RestaurantCategory({ data }) {
  const { title, itemCards } = data.card.card;
  const [btnClick, setBtnClick] = useState(false);

  return (
    <div className="">
      <div
        className="flex w-[900px] bg-slate-300 m-4 p-4 justify-between rounded-lg"
        onClick={() => {
          setBtnClick(!btnClick);
        }}
      >
        <div className="font-bold">
          {title} ({itemCards.length})
        </div>
        <div className="">⬇️</div>
      </div>
      {btnClick &&
        itemCards.map((x) => {
          return <CategoryList data={x} />;
        })}
    </div>
  );
}

export default RestaurantCategory;
