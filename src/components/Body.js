import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import { REST_API, restaurant_data } from "../utils/constants";

const Body = () => {
  const [card, setCard] = useState([]);
  const [topRatedRest, setTopRatedRest] = useState(card);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0].info.name
    );
    setCard(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="">
      <div className="">
        <button className="py-2 px-4 border border-black m-4 rounded-xl hover:bg-slate-300">
          Top Rated Restaurants
        </button>
      </div>
      {/* {console.log(card[0])} */}

      <div className="grid  grid-cols-4">
        {" "}
        {card.map((rest) => {
          return <RestCard data={rest} />;
        })}
      </div>
    </div>
  );
};
export default Body;
