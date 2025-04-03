import React, { useEffect, useState } from 'react';
import useAuthInfo from '../hooks/useAuthInfo';
import Swal from 'sweetalert2';
import useDynamicTitle from '../hooks/useDynamicTitle';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const BorrowedBooks = () => {
    useDynamicTitle('Borrowed Books')
    const { user } = useAuthInfo();
    const [myBorrowedBooks, setMyBorrowedBooks] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        // axios.get(`http://localhost:5000/myBorrowedBooks?email=${user?.email}`, {withCredentials: true})
        // .then(res=> setMyBorrowedBooks(res.data))

        axiosSecure.get(`/myBorrowedBooks?email=${user?.email}`)
            .then(res => setMyBorrowedBooks(res.data))
    }, [user?.email])

    const returnBtnHandler = id => {
        fetch(`http://localhost:5000/myBorrowedBook/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Successfully Returned!",
                        icon: "success",
                        draggable: true
                    });
                    const remaining = myBorrowedBooks.filter(mb => mb._id !== id);
                    setMyBorrowedBooks(remaining);
                }
            })

    }
    return (
        <div className='min-h-[900px]'>
            <div className="overflow-x-auto">
                <h2 className="text-xl font-bold my-4">My Borrowed Books: {myBorrowedBooks.length}</h2>
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
                        {myBorrowedBooks.map((myBorrowedBook, index) => (
                            <tr key={myBorrowedBook._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={myBorrowedBook.image || "N/A"} alt="Company Logo" className="w-12 h-12" />
                                </td>
                                <td>{myBorrowedBook.name}</td>
                                <td>{myBorrowedBook.category}</td>
                                <td>{myBorrowedBook.subcategory}</td>
                                <td>{myBorrowedBook.borrowed_date}</td>
                                <td>{myBorrowedBook.return_date}</td>
                                <td>
                                    <button onClick={() => returnBtnHandler(myBorrowedBook._id)} className='btn'>Return</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;