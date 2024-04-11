import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeLayout from "../Pages/Home/HomeLayout";
import StartService from "../Pages/StartService";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import Help from "../Pages/Help";
import OurSelf from "../Pages/OurSelf";
import Problem from "../Pages/Provlem";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/> ,
      children : [
       {
        path: '/',
        element: <HomeLayout/>
       },
       {
        path:'startSerives',
        element : <StartService/>
       },
       {
        path: 'login',
        element : <Login/>
       },
       {
        path: 'contact',
        element: <Contact/>
       },
       {
        path:'help',
        element : <Help/>
       },
       {
        path: 'ourSelf',
        element :<OurSelf/>
       },
       {
        path: 'problem',
        element: <Problem/>
       }
      ]
    },
  ]);

  