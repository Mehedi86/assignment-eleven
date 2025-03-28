import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';



const AllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/books').then(res=> res.json()).then(data=> 
            setBooks(data)
        )
    },[])
    

    return (
        <div className='bg-[#F3E8FF]'>
            <h2 className='text-5xl text-center font-bold p-12'>All Books</h2>
            <div className='container mx-auto md:grid grid-cols-6 gap-4 pb-12'>
                {books.map(book => <BookCard key={book._id} book={book} />)}
            </div>
        </div>
    );
};

export default AllBooks;


