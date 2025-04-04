import { useLoaderData, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars'
import useDynamicTitle from '../hooks/useDynamicTitle';


const BookDetailsWithoutBorrow = () => {
    useDynamicTitle('Book Details')
    const laodedBook = useLoaderData();
    const navigate = useNavigate();
    const [exactBook, setExactBook] = useState(laodedBook);
    console.log(exactBook)
    const { author, category, image, name, quantity, rating, subcategory, _id, description
    } = exactBook;


    return (
        <div className='md:py-24'>
            <div className='md:w-1/6 mx-auto'>
                <img className='h-[400px]' src={image || '/history.jpg'} alt="" />
            </div>
            <div className='md:w-1/6 mx-auto'>
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
                <p><span className='text-red-600 font-bold'>Notice:</span> Do you want to borrow this book!! <span onClick={() => navigate('/login', { state: `/books/details/${_id}` })} className='text-amber-400 animate-pulse btn font-bold'>Please login</span></p>
            </div>
        </div>
    );
};

export default BookDetailsWithoutBorrow;