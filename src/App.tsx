import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeFeed from "./pages/HomeFeed";
import Counter from "./pages/Counter";
import PostFeed from "./pages/PostFeed";
import Post from "./pages/Post";

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
  {
    path: "/posts",
    element: <PostFeed />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
