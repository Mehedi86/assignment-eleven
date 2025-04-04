import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStars from 'react-stars'
import BorrowModal from '../components/BorrowModal';
import useAuthInfo from '../hooks/useAuthInfo';
import Spinner from '../components/Spinner';
import useDynamicTitle from '../hooks/useDynamicTitle';
import useAxiosSecure from '../hooks/useAxiosSecure';


const BookDetails = () => {
    useDynamicTitle('Book Details')
    const axiosSecure = useAxiosSecure();
    const laodedBook = useLoaderData();
    const { user } = useAuthInfo();
    const [exactBook, setExactBook] = useState(laodedBook);
    // const [myborrowedBooks, setMyBorrowedBooks] = useState([]);
    const [status, setStatus] = useState(true);

    const { author, category, image, name, quantity, rating, subcategory, _id, description
    } = exactBook;

    useEffect(() => {
        // fetch(`https://assignment-eleven-server-black.vercel.app/myBorrowedBooks?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         const isExist = data.find(singleData => _id == singleData?.bookId);
        //         setStatus(quantity == 0 || !!isExist);
        //     })

        axiosSecure.get(`/myBorrowedBooks?email=${user?.email}`)
            .then(res => {
                const isExist = (res.data).find(singleData => _id == singleData?.bookId);
                setStatus(quantity == 0 || !!isExist);
            })
    }, [user?.email, _id, quantity])




    const borrowHandler = () => {
        document.getElementById('my_modal_1').showModal()
    }

    const handleQuantity = () => {
        const updatedBook = exactBook.quantity > 0 ? { ...exactBook, quantity: exactBook.quantity - 1 } : exactBook;
        setExactBook(updatedBook);
    }

    const handleBorrowBtnUpdate = () => {
        setStatus(true);
    }

    return (
        <div className='md:py-24 p-2 md:p-0 md:w-2/6 lg:w-2/6 mx-auto'>
            <div>
                <img className='h-[400px] w-full' src={image || '/history.jpg'} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-teal-600'><span className='text-black'>By</span> {author}</p>
                <p className='text-neutral-400 mt-2'>{description}</p>
                <ReactStars
                    count={5}
                    value={rating || 0}
                    size={28}
                    color2={'#ffd700'} />
                <p><span className='font-bold'>Category:</span> {category}</p>
                <p><span className='font-bold'>Subcategory:</span> {subcategory}</p>
                <p className='text-red-400 font-bold'><span className='font-bold text-black'>Quantity: </span>{quantity}</p>
                <button disabled={status} onClick={borrowHandler} className='btn my-6'>Borrow</button>
                <BorrowModal
                    exactBook={exactBook}
                    handleQuantity={handleQuantity}
                    handleBorrowBtnUpdate={handleBorrowBtnUpdate}
                />
            </div>
        </div>
    );
};

export default BookDetails;