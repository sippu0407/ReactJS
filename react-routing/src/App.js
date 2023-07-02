
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import { Outlet } from "react-router-dom";


function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
   
  },
   {
        path: "/about",
        element: <About />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
]);

  return (
    <div className='bg-blue-400'>
     <RouterProvider router={router} />

    <Outlet />

  </div>
  );
}

export default App;
