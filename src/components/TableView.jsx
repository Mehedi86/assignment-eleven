import React from 'react';
import { Link } from 'react-router-dom';

const TableView = ({ books }) => {
    console.log(books)
    return (
        <div>
            <div className="overflow-x-auto">
                <h2 className="text-xl font-bold my-4">My Borrowed Books: {books.length}</h2>
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book cover</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={book.image || "N/A"} alt="Company Logo" className="w-12 h-12" />
                                </td>
                                <td>{book.name}</td>
                                <td>{book.category}</td>
                                <td>{book.subcategory}</td>
                                <td>{book.borrowed_date}</td>
                                <td>{book.return_date}</td>
                                <td className='space-x-2'>
                                    <Link to={`/books/details/${book._id}`} className='btn btn-sm mt-2 bg-[#525252] text-white mb-4 w-20 ml-4'>Details</Link>
                                    <Link to={`/updateBook/${book._id}`} className='btn btn-sm mt-2 bg-[#525252] text-white mb-4 w-20'>Update</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableView;