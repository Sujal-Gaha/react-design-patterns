import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeFeed from "./pages/HomeFeed";
import Counter from "./pages/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>HomePage</div>,
  },
  {
    path: "/homeFeed",
    element: <HomeFeed />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
