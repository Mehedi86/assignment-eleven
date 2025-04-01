import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStars from 'react-stars'
import BorrowModal from '../components/BorrowModal';
import useAuthInfo from '../hooks/useAuthInfo';


const BookDetails = () => {
    const laodedBook = useLoaderData();
    const { user } = useAuthInfo();
    const [exactBook, setExactBook] = useState(laodedBook);
    // const [myborrowedBooks, setMyBorrowedBooks] = useState([]);
    const [status, setStatus] = useState(true);

    const { author, category, image, name, quantity, rating, subcategory, _id
    } = exactBook;

    useEffect(() => {
        fetch(`http://localhost:5000/myBorrowedBooks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                const isExist = data.find(singleData => _id == singleData?.bookId);
                
                setStatus(!!isExist)
            })
    }, [user?.email, _id])




    const borrowHandler = () => {
        document.getElementById('my_modal_1').showModal()
    }

    const handleQuantity = () => {
        const updatedBook = exactBook.quantity > 0 ? { ...exactBook, quantity: exactBook.quantity - 1 } : exactBook;
        setExactBook(updatedBook);
    }

    const handleBorrowBtnUpdate = () =>{
        setStatus(true);
    }

    return (
        <div className='md:py-24'>
            <div className='md:w-1/6 mx-auto'>
                <img className='h-[400px]' src={image || '/history.jpg'} alt="" />
            </div>
            <div className='md:w-1/6 mx-auto'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-teal-600'><span className='text-black'>By</span> {author}</p>
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