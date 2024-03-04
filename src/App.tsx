import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Headers from "./Components/Headers";
import Home from "./Components/Home";
import Login from "./Components/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Headers />
                <Outlet />
            </>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
