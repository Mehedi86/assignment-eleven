import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GenreWiseBooks from "../pages/GenreWiseBooks";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import UpdateBook from "../pages/UpdateBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks /></PrivateRoute>,
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
                loader: ({params})=> fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook/></PrivateRoute>
            },
            {
                path: '/updateBook/:id',
                element: <PrivateRoute><UpdateBook/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoute><BorrowedBooks/></PrivateRoute>
            }
        ]
    }
])

export default router;