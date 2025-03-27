import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GenreWiseBooks from "../pages/GenreWiseBooks";
import BookDetails from "../pages/BookDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allBooks',
                element: <AllBooks />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/books/:genre',
                element: <GenreWiseBooks />

            },
            {
                path: '/books/categories/:genre',
                element: <GenreWiseBooks />

            },
            {
                path: '/books/details/:id',
                element: <BookDetails />,
            }
        ]
    }
])

export default router;