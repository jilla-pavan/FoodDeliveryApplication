import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <div className="">
      <Header />
      <RouterProvider router={appRoot} />
      <Outlet />
    </div>
  );
}

const appRoot = createBrowserRouter([
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
  },
  {
    path: "/",
    element: <Body />,
  },
]);

export default App;
