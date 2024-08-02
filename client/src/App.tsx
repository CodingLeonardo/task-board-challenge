import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Board from "./pages/Board";
import loaderBoard from "./pages/Board/loader";
import TaskEdit from "./pages/TaskEdit";
import loaderTaskEdit from "./pages/TaskEdit/loader";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Board />,
            loader: loaderBoard,
          },
          {
            path: ":boardId",
            element: <Board />,
            loader: loaderBoard,
            children: [
              {
                path: "new",
                element: <TaskEdit />,
                loader: loaderTaskEdit,
              },
              {
                path: ":taskId",
                element: <TaskEdit />,
                loader: loaderTaskEdit,
              },
            ],
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
