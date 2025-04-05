import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const booksReview = [
        {
            id: 1,
            title: "The Mystery Manor",
            readerReview: "A classic whodunit that keeps you guessing till the end.",
            criticReview: "⭐ Doyle delivers another masterclass in detective fiction. - Mystery Weekly"
        },
        {
            id: 2,
            title: "Love in the Moonlight",
            readerReview: "A heartwarming romance with poetic descriptions of nature.",
            criticReview: "⭐ Carter's prose shines, though the plot leans on clichés. - BookPage"
        },
        {
            id: 3,
            title: "Galactic Wars",
            readerReview: "Epic space battles with unforgettable characters.",
            criticReview: "⭐ Orion's world-building is stellar, but dialogue falters. - SFX Magazine"
        },
        {
            id: 4,
            title: "Quantum Mechanics Explained",
            readerReview: "Makes complex physics concepts accessible to everyone.",
            criticReview: "⭐ Feynman's genius shines through in this brilliant primer. - Physics Today"
        },
        {
            id: 5,
            title: "The Secret Life of Cells",
            readerReview: "Fascinating deep dive into microscopic biology.",
            criticReview: "⭐ Brown makes cellular biology read like an adventure novel. - Science Journal"
        },
        {
            id: 6,
            title: "Chemical Reactions Unveiled",
            readerReview: "Perfect for students and chemistry enthusiasts alike.",
            criticReview: "⭐ Miller breaks down complex reactions with remarkable clarity. - ChemWorld"
        },
        {
            id: 7,
            title: "The Rise of Ancient Civilizations",
            readerReview: "Comprehensive look at humanity's earliest societies.",
            criticReview: "⭐ Harrison's research is impeccable, though somewhat dry. - History Today"
        },
        {
            id: 8,
            title: "World War Chronicles",
            readerReview: "Gritty and realistic portrayal of war's impact.",
            criticReview: "⭐ Johnson's battlefield narratives are brutally authentic. - Military History"
        },
        {
            id: 9,
            title: "The Life of Leonardo Da Vinci",
            readerReview: "Detailed and inspiring biography of a genius.",
            criticReview: "⭐ Green captures Da Vinci's brilliance but skimps on his flaws. - Biographer's Digest"
        },
        {
            id: 10,
            title: "AI Revolution",
            readerReview: "Thought-provoking look at our technological future.",
            criticReview: "⭐ Patterson raises important questions about AI ethics. - Tech Horizon"
        },
        {
            id: 11,
            title: "Mastering React",
            readerReview: "The best guide for modern web development.",
            criticReview: "⭐ Evans delivers exactly what the title promises. - Code Monthly"
        },
        {
            id: 12,
            title: "Cybersecurity Essentials",
            readerReview: "Crucial knowledge for our digital age.",
            criticReview: "⭐ Norton makes complex security concepts approachable. - IT Security News"
        },
        {
            id: 13,
            title: "The Shadow Detective",
            readerReview: "A page-turner with clever twists.",
            criticReview: "⭐ Drew proves why she's the queen of mystery. - Crime Fiction Review"
        },
        {
            id: 14,
            title: "A Heart's Journey",
            readerReview: "Beautifully written emotional rollercoaster.",
            criticReview: "⭐ Adams crafts characters that feel utterly real. - Romance Reads"
        },
        {
            id: 15,
            title: "Time Traveler's Diary",
            readerReview: "Mind-bending twists with historical accuracy.",
            criticReview: "⭐ Parker blends sci-fi and history masterfully. - SciFi Now"
        }
    ];
    const [reviews, setReviews] = useState(booksReview.slice(0, 2));
    const [status, setStatus] = useState(false);

    useEffect(() => {
        status ? setReviews(booksReview) : setReviews(booksReview.slice(0, 2))
    }, [status])
    return (
        <div className='pb-12'>
            <h2 className='text-2xl md:text-5xl text-center font-bold mt-16 mb-6'>Reviews</h2>
            <h2 className='text-lg md:text-xl text-gray-400 font-semibold text-center pb-12 px-2'>Review can help readers to choose a book easily for read.</h2>
            <div className='container mx-auto shadow-2xl bg-gray-200 p-4'>
                {reviews.map(review => <div className='bg-[#134E4A] text-white rounded p-4 my-2' key={review.id}>
                    <p><span className='font-bold'>Book Name:</span> {review.title}</p>
                    <p><span className='font-bold'>Reader Review:</span> {review.readerReview}</p>
                    <p><span className='font-bold'>Critics Review:</span> {review.criticReview}</p>
                </div>
                )}
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setStatus(!status)} className='btn text-center -mt-2'>{status ? 'Show less' : 'Show all'}</button>
            </div>
        </div>
    );
};

export default Reviews;