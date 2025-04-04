import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import useDynamicTitle from '../hooks/useDynamicTitle';
import useAxiosSecure from '../hooks/useAxiosSecure';

const GenreWiseBooks = () => {
    const { genre } = useParams();
    const axiosSecure = useAxiosSecure();
    useDynamicTitle(`${genre}`)
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch('https://assignment-eleven-server-black.vercel.app/booksForQuery') 
            .then(response => response.json())
            .then(data => setBooks(data))

        // axiosSecure.get('/booksForQuery').then(res => {
        //     setBooks(res.data);
        // })
    }, []);

    useEffect(() => {
        if (location.pathname === `/books/categories/${genre}`) {
            const filtered = books.filter(book => book.subcategory === genre);
            setFilteredBooks(filtered)
        }
        else {
            const filtered = books.filter(book => book.category === genre);
            setFilteredBooks(filtered)
        }
    }, [books, genre, location.pathname]);

    return (
        <div className='bg-[#F3E8FF]'>
            <h2 className='text-2xlmd:text-5xl text-center font-bold p-12'>{genre}</h2>
            <div className='container mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 pb-12 px-2'>
                {filteredBooks.map(book => <BookCard key={book._id} book={book} />)}
            </div>
        </div>
    );
};

export default GenreWiseBooks;
