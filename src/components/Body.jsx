/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const Body = () => {
  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  

  return <RouterProvider router={appRouter} />;
};

export default Body;
