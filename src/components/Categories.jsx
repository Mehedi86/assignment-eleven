import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Fiction",
            thumbnail: "/fiction.jpg",
            about: "Dive into imaginative worlds and captivating stories with our Fiction collection."
        },
        {
            id: 2,
            name: "Science",
            thumbnail: "/science.jpg",
            about: "Explore the wonders of the universe and groundbreaking discoveries in Science."
        },
        {
            id: 3,
            name: "History",
            thumbnail: "/history.jpg",
            about: "Discover the past through fascinating accounts of historical events and figures."
        },
        {
            id: 4,
            name: "Self-Help",
            thumbnail: "/self-help.jpg",
            about: "Empower yourself with insightful books on personal growth and development."
        }
    ]



    return (
        <div className='bg-[#F3E8FF] py-12 my-12'>
            <h2 className='text-5xl text-center font-bold my-12 pb-12'>Categories</h2>
            <div className='container px-2 md:px-2 mx-auto md:grid grid-cols-4 gap-12'>
                {categories.map(category => <Link key={category.id}>
                    <div className="card my-4 md:my-0 bg-base-100 shadow-sm hover:scale-105 transition duration-500 cursor-pointer">
                        <div className="card-body">
                            <h2 className="card-title">{category.name}</h2>
                            <p>{category.about}</p>
                        </div>
                        <figure>
                            <img
                                className='h-[270px] w-full'
                                src={category.thumbnail}
                                alt="Shoes" />
                        </figure>
                    </div>
                </Link>
                )}
            </div>
        </div>
    );
};

export default Categories;