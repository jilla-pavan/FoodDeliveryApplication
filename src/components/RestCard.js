import { CDN_URL } from "../utils/constants";

const RestCard = ({ data }) => {
  //   console.log(data);
  const { info } = data;
  const { name, cuisines, avgRating, areaName, cloudinaryImageId } = info;
  return (
    <div className=" bg-[aliceblue] m-4 p-4 w-[280px] h-[280px] flex flex-col items-center hover:border border-black rounded-lg">
      <img
        className="w-[160px] h-[120px] rounded-lg border border-black"
        src={CDN_URL + cloudinaryImageId}
        alt="restImage"
      />
      <ul className="flex items-center flex-col py-3">
        <li className="font-bold text-lg text-center">{name}</li>
        <li className="text-center">{cuisines.join(", ")}</li>
        <li className="">{avgRating}⭐</li>
        <li className="">{areaName}</li>
      </ul>
    </div>
  );
};

export default RestCard;
