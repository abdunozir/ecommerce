import "./assets/styles/index.scss";
import { Home, Shop } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";

function App() {
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
          path: "/shop",
          element: <Shop />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
