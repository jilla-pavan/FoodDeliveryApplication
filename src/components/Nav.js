export const Nav = () => {
  return (
    <div className="flex bg-[yellowgreen] justify-between">
      <div>
        <img
          className="w-16 m-2 rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-8 m-2">Offers</li>
          <li className="px-8 m-2">Help Us</li>
        </ul>
      </div>
    </div>
  );
};
