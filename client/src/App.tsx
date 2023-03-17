import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// pages
import { ErrorPage } from "./error-page";
import Home from "./pages/Home/Home";
import FindTalent from "./pages/FindTalent/FindTalent";
import FindWork from "./pages/FindWork/FindWork";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
// css
import "./App.css";

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
          path: "/find-talent",
          element: <FindTalent />,
        },
      ],
    },
    {
      path: "/sign-up",
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
