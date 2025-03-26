import React from 'react';

const BookCard = ({book}) => {
    const {author, category, image, name, quantity, rating} = book;
    return (
        <div className='flex justify-center'>
            <h2>{author}</h2>
        </div>
    );
};

export default BookCard;
