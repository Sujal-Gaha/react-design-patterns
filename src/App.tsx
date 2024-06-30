import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeFeed from "./pages/HomeFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>HomePage</div>,
  },
  {
    path: "/homeFeed",
    element: <HomeFeed />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
