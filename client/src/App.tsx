import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// pages
import { ErrorPage } from "./error-page";
import Home from "./pages/Home/Home";
import Gigs from "./pages/Gigs/Gigs";
import { GigPage } from "./pages/Gig/GigPage";
import FindWork from "./pages/FindWork/FindWork";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Orders from "./pages/Orders/Orders";
// css
import "./App.css";
import Add from "./pages/Add/Add";
import { Messages } from "./pages/Messages/Messages";

const App = () => {
  const Layout = (): JSX.Element => {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/find-work",
          element: <FindWork />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <GigPage />,
        },
        {
          path: "/add-gig",
          element: <Add />
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        // {
        //   path: "/pay/:id",
        //   element: <Pay />,
        // },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
