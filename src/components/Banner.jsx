import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full rounded overflow-hidden h-[200px] md:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full bg-[url(/banner-1.jpg)] bg-cover bg-no-repeat">
                <div className='flex justify-center items-center w-full'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-lg md:text-4xl font-extrabold'>Explore a World of Knowledge</h2>
                        <p className='font-semibold'>Read genuine player reviews to make informed decisions before playing a game.</p>
                        <button className='btn bg-[#3C393B] text-white'>Learn More</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-[url(/banner-2.jpg)] bg-cover bg-no-repeat">
                <div className='flex justify-center items-center w-full text-black'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-lg md:text-4xl font-extrabold'>Effortless Book Borrowing</h2>
                        <p className='font-semibold'>Easily borrow and return books with our seamless library system.</p>
                        <button className='btn bg-[#3C393B] text-white'>Learn More</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-[url(/banner-3.jpg)] bg-cover bg-no-repeat">
                <div className='flex justify-center items-center w-full text-white'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-lg md:text-4xl font-extrabold'>Stay Updated on New Arrivals</h2>
                        <p className='font-semibold'>Be the first to know about the latest books added to our collection.</p>
                        <button className='btn bg-[#3C393B] text-white'>Learn More</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;