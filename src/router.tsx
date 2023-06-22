import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import InputMessage from "./components/InputMessage";
import Message from "./components/Message";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        /* element: <Message />, */
      },
    ],
  },
]);

export default router;
