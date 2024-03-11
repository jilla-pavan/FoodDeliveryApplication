export const Nav = () => {
  return (
    <div className="flex bg-slate-100 justify-between">
      <div>
        <img
          className="w-16 m-2 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMPxHmUisIHjrUBD8Cp7Kl6uTTEoipbpgu1Xxmb8bIg&s"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-8 m-2">Search</li>
          <li className="px-8 m-2">Offers</li>
          <li className="px-8 m-2">Help Us</li>
        </ul>
      </div>
    </div>
  );
};
