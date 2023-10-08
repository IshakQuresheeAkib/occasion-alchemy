import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";

import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          path:'/',
          loader:()=>fetch('/Data/data.json'),
          element:<Home></Home>
        },
        {
         path:'/contact',
         element:<Contact></Contact> 
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router;