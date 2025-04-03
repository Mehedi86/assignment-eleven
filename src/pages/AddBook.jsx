import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useDocumentTitle from '../hooks/useDynamicTitle';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AddBook = () => {

    useDocumentTitle('Add Books');
    const axiosSecure = useAxiosSecure();
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const subCategories = {
        Fiction: ["Mystery", "Romance", "Sci-Fi"],
        Science: ["Physics", "Biology", "Chemistry"],
        History: ["Ancient History", "Modern History", "Biographies"],
        Technology: ["Artificial Intelligence", "Web Development", "Cybersecurity"],
    };

    const handleSelectedCategory = e => {
        const category = e.target.value;
        setSelectedSubcategories(subCategories[category] || [])
    }

    const handleAddBook = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const singleBook = Object.fromEntries(formData);

        if (singleBook.rating > 5 || singleBook.rating < 0 || singleBook.rating == "") {
            return setErrorMessage('please keep rating below 5 and higher 0')
        }

        axiosSecure.post('/books', singleBook).then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Successfully Added!",
                    icon: "success",
                    draggable: true
                });
                setErrorMessage('');
                e.target.reset();
            }
        })

        // fetch('https://assignment-eleven-server-black.vercel.app/books', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(singleBook)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: "Successfully Added!",
        //                 icon: "success",
        //                 draggable: true
        //             });
        //             setErrorMessage('');
        //             e.target.reset();
        //         }
        //     })
    }
    return (
        <div>
            <div className="flex justify-center mt-12">
                <div className="card w-full max-w-lg shrink-0">
                    <h2 className='text-2xl font-bold text-center mt-6'>Please Provide Some Information</h2>
                    <div className="card-body">
                        <form onSubmit={handleAddBook} className="fieldset">
                            <label className="fieldset-label">Image</label>
                            <input type="text" className="input w-full" placeholder="Image" name="image" />
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input w-full" placeholder="Name" name="name" />
                            <label className="fieldset-label">Quantity</label>
                            <input type="text" className="input w-full" placeholder="Quantity" name="quantity" />
                            <label className="fieldset-label">Author Name</label>
                            <input type="text" className="input w-full" placeholder="Author name" name="author" />
                            <label className="fieldset-label">Category</label>
                            <select onChange={handleSelectedCategory} defaultValue="Select a Category" className="select" name='category'>
                                <option hidden>Select a category</option>
                                {Object.keys(subCategories).map(category => <option key={category} value={category}>{category}</option>)}
                            </select>
                            <label className="fieldset-label">Subcategory (first Select Category)</label>
                            <select defaultValue="Select a subcategory" className="select" name='subcategory'>
                                <option hidden>Select a subcategory</option>
                                {selectedSubcategories.map(ssc => <option key={ssc} value={ssc}>{ssc}</option>)}
                            </select>
                            <label className="fieldset-label">Short Description:</label>
                            <input type="text" className="input w-full" placeholder="Description" name="description" />
                            <label className="fieldset-label">Rating (0-5)</label>
                            <input type="text" className="input w-full" placeholder="Rating" name="rating" />
                            <label className="fieldset-label">Book Content</label>
                            <input type="text" className="input w-full" placeholder="Book content" name="content" />
                            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;