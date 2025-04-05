import React, { useEffect, useState } from 'react';

const BookAuthors = () => {

    const authorsArray = [
        { id: 1, name: "Emily Carter", birth: 1975, death: null, famousBook: "Love in the Moonlight" },
        { id: 2, name: "Sarah Johnson", birth: 1968, death: null, famousBook: "World War Chronicles" },
        { id: 3, name: "Jane Robinson", birth: 1980, death: null, famousBook: "Modern Leaders: The 21st Century" },
        { id: 4, name: "Dr. Samuel Parker", birth: 1955, death: 2020, famousBook: "Time Traveler's Diary" },
        { id: 5, name: "Margaret Green", birth: 1942, death: 2015, famousBook: "The Life of Leonardo Da Vinci" },
        { id: 6, name: "Arthur Doyle", birth: 1859, death: 1930, famousBook: "The Mystery Manor" },
        { id: 7, name: "Andrew Ng", birth: 1976, death: null, famousBook: "Deep Learning Unveiled" },
        { id: 8, name: "Stuart McClure", birth: 1968, death: null, famousBook: "Hacking Exposed" },
        { id: 9, name: "Edward Norton", birth: 1969, death: null, famousBook: "Cybersecurity Essentials" },
        { id: 10, name: "Dr. Brian Carter", birth: 1950, death: 2018, famousBook: "Organic Chemistry Basics" },
        { id: 11, name: "Arthur Conan Doyle", birth: 1859, death: 1930, famousBook: "Sherlock's Last Case" },
        { id: 12, name: "Dr. John Miller", birth: 1945, death: 2021, famousBook: "Chemical Reactions Unveiled" },
        { id: 13, name: "Marie Curie", birth: 1867, death: 1934, famousBook: "Exploring the Periodic Table" },
        { id: 14, name: "James Orion", birth: 1972, death: null, famousBook: "Galactic Wars" },
        { id: 15, name: "Edward Gibbon", birth: 1737, death: 1794, famousBook: "The Roman Empire" },
        { id: 16, name: "William Harrison", birth: 1960, death: null, famousBook: "The Rise of Ancient Civilizations" },
        { id: 17, name: "Albert Einstein", birth: 1879, death: 1955, famousBook: "Understanding Relativity" },
        { id: 18, name: "Dr. Lisa Brown", birth: 1978, death: null, famousBook: "The Secret Life of Cells" },
        { id: 19, name: "David Carter", birth: 1955, death: null, famousBook: "The Cold War Era" },
        { id: 20, name: "Ray Kurzweil", birth: 1948, death: null, famousBook: "The Future of AI" },
        { id: 21, name: "Chris Evans", birth: 1981, death: null, famousBook: "Mastering React" },
        { id: 22, name: "Nancy Drew", birth: 1930, death: null, famousBook: "The Shadow Detective" },
        { id: 23, name: "James Walker", birth: 1965, death: null, famousBook: "Egyptian Wonders" },
        { id: 24, name: "Isaac Asimov", birth: 1920, death: 1992, famousBook: "Starship Odyssey" },
        { id: 25, name: "Dr. Richard Feynman", birth: 1918, death: 1988, famousBook: "Quantum Mechanics Explained" },
        { id: 26, name: "Dr. Susan Lee", birth: 1970, death: null, famousBook: "The Genetic Code" },
        { id: 27, name: "Sophie Adams", birth: 1985, death: null, famousBook: "A Heart's Journey" },
        { id: 28, name: "Elon Patterson", birth: 1973, death: null, famousBook: "AI Revolution" },
        { id: 29, name: "Walter Isaacson", birth: 1952, death: null, famousBook: "Steve Jobs: Innovator" },
        { id: 30, name: "Douglas Crockford", birth: 1955, death: null, famousBook: "JavaScript: The Good Parts" },
        { id: 31, name: "Rokib Hasan", birth: 1980, death: null, famousBook: "Tin Goyenda" },
        { id: 32, name: "Horald", birth: 1965, death: null, famousBook: "Chemistry Essentials" },
        { id: 33, name: "Lauten", birth: 1972, death: null, famousBook: "Liquid Measures" },
        { id: 34, name: "fidel quanb", birth: 1985, death: null, famousBook: "rising to the high" }
    ];
    const [authors, setAuthors] = useState(authorsArray.slice(0, 6));
    const [status, setStatus] = useState(false);

    useEffect(() => {
        status ? setAuthors(authorsArray) : setAuthors(authorsArray.slice(0,6))
    }, [status])

    return (
        <div className='pb-12'>
            <h2 className='text-2xl md:text-5xl text-center font-bold mt-16 mb-6'>Authors</h2>
            <h2 className='text-lg md:text-xl text-gray-400 font-semibold text-center pb-12 px-2'>Provide some information of authors of books which in our collection</h2>
            <div className='grid md:grid-cols-6 gap-2 container mx-auto shadow-2xl bg-gray-200 p-4'>
                {authors.map(author => <div className='bg-[#134E4A] text-white rounded p-4' key={author.id}>
                    <p><span className='font-bold'>Name:</span> {author.name}</p>
                    <p><span className='font-bold'>Birth:</span> {author.birth}</p>
                    <p><span className='font-bold'>Death:</span> {author.death || 'N/A'}</p>
                    <p><span className='font-bold'>Famous Books:</span> {author.famousBook}</p>
                </div>
                )}
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setStatus(!status)} className='btn text-center -mt-2'>{status ? 'Show less' : 'Show all'}</button>
            </div>
        </div>
    );
};

export default BookAuthors;