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
            },
            {
                path: '/addBook',
                element: <AddBook/>
            },
            {
                path: '/updateBook/:id',
                element: <UpdateBook/>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks/>
            }
        ]
    }
])

export default router;