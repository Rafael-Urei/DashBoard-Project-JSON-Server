import "./styles/global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./shared/components/NavBar/NavBar";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
};
