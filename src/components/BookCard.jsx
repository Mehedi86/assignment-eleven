import React from 'react';
import { Link } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';

const BookCard = ({ book }) => {
    const {user} = useAuthInfo();
    const { author, category, image, name, quantity, rating, subcategory, _id } = book;
    return (
        <div className='flex justify-center shadow-sm my-2 md:my-0'>
            <div className="card bg-base-100 w-full flex flex-col justify-between">
                <figure>
                    <img 
                    className='h-[290px] w-full p-4'
                        src={image || '/history.jpg'}
                        alt="Shoes" />
                </figure>
                <div className="p-4">
                    <h2 className="text-xl font-bold text-[#059669]">{name}</h2>
                    <p className='text-gray-400'>{author}</p>
                    <p><span className='font-bold'>Category:</span> {category}</p>
                    <p><span className='font-bold'>Subcategory:</span> {subcategory}</p>
                </div>
                <div className='flex gap-2'>
                    <Link to={user?.email ? `/books/details/${_id}` : `/books/detailsNoUser/${_id}`} className='btn btn-sm mt-2 bg-[#525252] text-white mb-4 w-20 ml-4'>Details</Link>
                    <Link to={`/updateBook/${_id}`} className='btn btn-sm mt-2 bg-[#525252] text-white mb-4 w-20'>Update</Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
