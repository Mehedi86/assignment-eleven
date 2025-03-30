import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from 'react-stars'
import BorrowModal from '../components/BorrowModal';


const BookDetails = () => {
    const laodedBook = useLoaderData();
    const [exactBook, setExactBook] = useState(laodedBook);
    const { author, category, image, name, quantity, rating, subcategory } = exactBook;


    const borrowHandler = () => {
        document.getElementById('my_modal_1').showModal()
    }


    const handleQuantity = () =>{
        const updatedBook = {...exactBook, quantity: exactBook.quantity-1};
        setExactBook(updatedBook);
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
                <button onClick={borrowHandler} className='btn my-6'>Borrow</button>
                <BorrowModal
                    exactBook={exactBook}
                    handleQuantity={handleQuantity}
                />
            </div>
        </div>
    );
};

export default BookDetails;