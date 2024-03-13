import React, { useEffect, useState } from "react";
import { MENU_LIST_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_LIST_API + resId);
    const json = await data.json();
    console.log(json.data);
    setMenuList(json.data);
  };

  if (menuList.length === 0) return <Shimmer />;
  const { name, cuisines, avgRating } = menuList?.cards[0]?.card?.card?.info;
  const { itemCards } =
    menuList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  const category =
    menuList.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  console.log(category);
  console.log(itemCards);

  return (
    <div className="p-2 m-2 text-center">
      <ul className="">
        <li className="font-bold text-xl ">{name.toUpperCase()}</li>
        <li className="">{cuisines.join(", ")}</li>
        <li className="">{avgRating} ⭐</li>
      </ul>
      <ul className="flex flex-col justify-center items-center">
        {category.map((x, index) => {
          return <RestaurantCategory data={x} />;
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
