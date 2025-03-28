import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

const GenreWiseBooks = () => {
    const { genre } = useParams();
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:5000/books') 
            .then(response => response.json())
            .then(data => setBooks(data))
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
            <h2 className='text-5xl text-center font-bold p-12'>{genre}</h2>
            <div className='container mx-auto grid grid-cols-6 gap-4 pb-12'>
                {filteredBooks.map(book => <BookCard key={book._id} book={book} />)}
            </div>
        </div>
    );
};

export default GenreWiseBooks;
