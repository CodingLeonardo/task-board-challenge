import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Board from "./components/Board";
import TaskEdit from "./components/TaskEdit";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Board />,
        children: [
          {
            path: "/:id",
            element: <TaskEdit />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
