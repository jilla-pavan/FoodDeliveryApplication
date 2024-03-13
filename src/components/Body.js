import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import { REST_API, restaurant_data } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCard(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterSearch(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return card.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="">
          <button
            onClick={() => {
              const filter = card.filter((x) => {
                return x.info.avgRating > 4.2;
              });
              setCard(filter);
            }}
            className="py-2 px-4 border border-black m-4 rounded-xl hover:bg-slate-300 w-6/12"
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              // console.log(e.target.value);
            }}
            className="py-2 p-2 border border-black m-4 rounded-xl hover:bg-slate-300 w-8/12"
            type="text"
            placeholder="Search Here..."
          />

          <button
            onClick={() => {
              const filSearch = filterSearch.filter((x) => {
                return x.info.name.toLowerCase().includes(search.toLowerCase());
              });

              setCard(filSearch);
            }}
            className="py-2 px-4 border border-black m-4 rounded-xl hover:bg-slate-300"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid  grid-cols-4">
        {card.map((rest, index) => {
          return (
            <Link key={index} to={"/restaurants/" + rest.info.id}>
              {" "}
              <RestCard key={index} data={rest} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
