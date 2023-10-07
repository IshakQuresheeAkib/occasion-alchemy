import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
         path:'/contact',
         element:<Contact></Contact> 
        }
      ]
    },
  ]);

export default router;