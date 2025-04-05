import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Fiction",
            thumbnail: "/fiction.jpg",
            about: "Dive into imaginative worlds and captivating stories with our Fiction collection.",
            subcategories: [
                { id: 101, name: "Mystery" },
                { id: 102, name: "Romance" },
                { id: 103, name: "Sci-Fi" }
            ]
        },
        {
            id: 2,
            name: "Science",
            thumbnail: "/science.jpg",
            about: "Explore the wonders of the universe with our Science collection.",
            subcategories: [
                { id: 201, name: "Physics" },
                { id: 202, name: "Biology" },
                { id: 203, name: "Chemistry" }
            ]
        },
        {
            id: 3,
            name: "History",
            thumbnail: "/history.jpg",
            about: "Uncover the past and learn from history through our extensive History collection.",
            subcategories: [
                { id: 301, name: "Ancient_History" },
                { id: 302, name: "Modern_History" },
                { id: 303, name: "Biographies" }
            ]
        },
        {
            id: 4,
            name: "Technology",
            thumbnail: "/technology.jpg",
            about: "Stay ahead with the latest advancements in Technology, from AI to cybersecurity.",
            subcategories: [
                { id: 401, name: "Artificial_Intelligence" },
                { id: 402, name: "Web_Development" },
                { id: 403, name: "Cybersecurity" }
            ]
        }
    ];

    return (
        <div className='bg-[#F3E8FF] py-12 my-12'>
            <h2 className='text-2xl md:text-5xl text-center font-bold my-12 '>Categories</h2>
            <h2 className='text-lg md:text-xl text-gray-400 font-semibold text-center pb-12 px-2'>Click any <span className='text-orange-400 animate-pulse font-bold'>Category</span> or <span className='text-orange-400 animate-pulse font-bold'>Subcategory</span> will redirect you to your desired collection!!</h2>
            <div className='container px-2 md:px-2 mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 gap-12'>
                {categories.map(category =>
                    <div key={category.id} className="card my-4 md:my-0 bg-base-100 shadow-sm  text-center">
                        <div className="card-body text-center">
                            <div className='py-1'>
                                <Link to={`/books/${category.name}`} className="bg-[#134E4A] btn w-full text-white text-lg hover:scale-105 transition duration-500">{category.name}</Link>
                            </div>
                            <p>{category.about}</p>
                            <div className='flex flex-col mx-auto'>
                                {(category.subcategories).map(subcategory => <Link to={`/books/categories/${subcategory.name}`} key={subcategory.id} className='btn w-40'>{subcategory.name}</Link>)}
                            </div>
                        </div>
                        <figure>
                            <img
                                className='h-[200px] w-full'
                                src={category.thumbnail}
                                alt="Shoes" />
                        </figure>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Categories;