import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },{
                path:"/details/:id",
                element:<Details/>
            },{
                path:"*",
                element: <NotFound/>
            }
        ]
    }
])

export {router}