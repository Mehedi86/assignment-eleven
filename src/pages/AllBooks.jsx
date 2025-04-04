import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import TableView from '../components/TableView';
import useDynamicTitle from '../hooks/useDynamicTitle';
import useAxiosSecure from '../hooks/useAxiosSecure';



const AllBooks = () => {

    useDynamicTitle('AllBooks');
    const axiosSecure = useAxiosSecure();
    const [books, setBooks] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        // fetch('https://assignment-eleven-server-black.vercel.app/books').then(res => res.json()).then(data =>
        //     setBooks(data)
        // )
        axiosSecure.get('/books').then(res => {
            setBooks(res.data)
        })
    }, [])

    const handleAvailableBtn = () => {
        const available = books.filter(book => book.quantity > 0);
        setBooks(available);
    }


    return (
        <div className='bg-[#F3E8FF] px-2 md:mx-0 '>
            <h2 className='text-2xl md:text-5xl text-center font-bold p-12'>All Books</h2>
            <div className='flex md:justify-end items-center container mx-auto my-12 itmes-center'>
                <h2 className='text-center mr-12 hidden md:block'>Total books: {books?.length}</h2>
                <details className="dropdown items-center">
                    <summary className="btn m-1">View As</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <button onClick={() => setStatus(null)} className='btn'>Card view</button>
                        <button onClick={() => setStatus('table')} className='btn'>Table view</button>
                    </ul>
                </details>
                <div className='flex items-center'>
                    <button onClick={handleAvailableBtn} className='btn'>Show available books</button>
                </div>
            </div>
            {status == null ? <div className='container mx-auto md:grid md:grid-cols-3 grid-cols-4 gap-4 pb-12'>
                {books.map((book, index) => <BookCard key={book._id} book={book} />)}
            </div> : <TableView books={books} />}
        </div>
    );
};

export default AllBooks;


