import SignIn from "./components/SignIn";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import React from 'react';

import './index.css';
import MainContainer from "./components/MainContainer";



function App() {
  return (
    
      <div>
        <RouterProvider router={appRouter} />
      </div>
    
  );
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    
   
  },
  {
     path: "/upload",
    element: <MainContainer/>,

  },

]);


export default App;