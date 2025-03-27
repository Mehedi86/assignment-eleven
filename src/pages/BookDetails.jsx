import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars'

const BookDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [exactBook, setExactBook] = useState(null || {});

    const { author, category, image, name, quantity, rating, subcategory } = exactBook;


    useEffect(() => {
        fetch('/books.json')
            .then(response => response.json())
            .then(data => {
                const findBook = data.find(book => book.id == id);
                setExactBook(findBook)
            })
    }, [id]);

    return (
        <div className='md:py-24'>
            <div className='md:w-1/6 mx-auto'>
                <img className='h-[400px]' src='/history.jpg' alt="" />
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
                    <button className='btn my-6'>Borrow</button>
            </div>
        </div>
    );
};

export default BookDetails;