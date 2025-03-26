import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../components/BookCard';

const AllBooks = () => {
    const loadedAllBooks = useLoaderData();
    const [books, setBooks] = useState(loadedAllBooks);
    console.log(books)
    return (
        <div className='bg-[#F3E8FF]'>
            <h2 className='text-5xl text-center font-bold p-12'>All Books</h2>
            <div className='container mx-auto grid grid-cols-6 gap-4'>
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default AllBooks;


