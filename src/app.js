import React, {lazy, Suspense, useState, useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantInfo from "./components/RestaurantInfo/RestaurantInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login/Login";
// import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import('./components/Instamart'));

const AppLayout = () => {
  // const [user, setUser] = useState({
  //     name: "Deepika",
  //     email: "deepika@gmail.com"
  // });
    return (
      <Provider store={store}>
          {/* <UserContext.Provider value={{
              user : user,
            }}> */}
            <Header />
            <Outlet />
          {/* </UserContext.Provider> */}
          <Footer />
      </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/login",
    element: <Login />,
  },
  
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      
      {
          path:"/about",
          element: <About />,
          children: [
            {
              path: "profile",
              element: <Profile />
            },
          ]
      },
      {
        path:"/",
        element: <Body />
      },
      {
      path:"/contact",
      element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />
      },
      {
        path:"/instamart",
        element:  
        (
        <Suspense>
          <Instamart />
        </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]    
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);