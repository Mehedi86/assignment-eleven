import React from 'react';

const BookCard = ({ book }) => {
    const { author, category, image, name, quantity, rating } = book;
    return (
        <div className='flex justify-center shadow-sm'>
            <div className="card bg-base-100 w-full flex flex-col justify-between">
                <figure>
                    <img
                        src='/history.jpg'
                        alt="Shoes" />
                </figure>
                <div className="p-4">
                    <h2 className="text-xl font-bold text-[#059669]">{name}</h2>
                    <p className='text-gray-400'>{author}</p>
                    <p><span className='font-bold'>Category:</span> {category}</p>
                </div>
                <button className='btn btn-sm mt-2 bg-[#525252] text-white mb-4 w-20 mx-4'>Details</button>
            </div>
        </div>
    );
};

export default BookCard;
