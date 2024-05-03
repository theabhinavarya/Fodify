import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Loading from "./components/Loading";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on demanad loading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [username, setUsername] = useState();

  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Abhinav Arya",
    };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Loading />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
