import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useDynamicTitle from '../hooks/useDynamicTitle';
import useAxiosSecure from '../hooks/useAxiosSecure';

const UpdateBook = () => {
    useDynamicTitle('Update Book')
    const axiosSecure = useAxiosSecure();
    const { author, category, description, id, image, name, quantity, rating, subcategory, _id, content } = useLoaderData() || [];

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

    const handleUpdateBook = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData);

        if (updatedData.rating > 5 || updatedData.rating < 0 || updatedData.rating == "") {
            return setErrorMessage('please keep rating below 5 and higher 0')
        }

        axiosSecure.put(`/updateBook/${_id}`, updatedData).then(res => {
            if (res.data.matchedCount > 0) {
                Swal.fire({
                    title: "Successfully Updated!",
                    icon: "success",
                    draggable: true
                });
                setErrorMessage('');
            }
        })

        // fetch(`https://assignment-eleven-server-black.vercel.app/updateBook/${_id}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(updatedData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.matchedCount > 0) {
        //             Swal.fire({
        //                 title: "Successfully Updated!",
        //                 icon: "success",
        //                 draggable: true
        //             });
        //             setErrorMessage('');
        //         }
        //     })
    }

    return (
        <div>
            <div className="flex justify-center mt-12">
                <div className="card w-full max-w-lg shrink-0">
                    <h2 className='text-2xl font-bold text-center mt-6'>Update Book</h2>
                    <div className="card-body">
                        <form onSubmit={handleUpdateBook} className="fieldset">
                            <label className="fieldset-label">Image</label>
                            <input type="text" className="input w-full" placeholder="Image" name="image" defaultValue={image} />
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input w-full" placeholder="Name" name="name" defaultValue={name} />
                            <label className="fieldset-label">Quantity</label>
                            <input type="text" className="input w-full" placeholder="Quantity" name="quantity" defaultValue={quantity} />
                            <label className="fieldset-label">Author Name</label>
                            <input type="text" className="input w-full" placeholder="Author name" name="author" defaultValue={author} />
                            <label className="fieldset-label">Category</label>
                            <select onChange={handleSelectedCategory} defaultValue={category} className="select" name='category'>
                                <option hidden>Select a category</option>
                                {Object.keys(subCategories).map(category => <option key={category} value={category}>{category}</option>)}
                            </select>
                            <label className="fieldset-label">Subcategory</label>
                            <select defaultValue={subcategory} className="select" name='subcategory'>
                                <option hidden>Select a subcategory</option>
                                {selectedSubcategories.map(ssc => <option key={ssc} value={ssc}>{ssc}</option>)}
                            </select>
                            <label className="fieldset-label">Short Description</label>
                            <input type="text" className="input w-full" placeholder="Description" name="description" defaultValue={description} />
                            <label className="fieldset-label">Rating</label>
                            <input type="text" className="input w-full" placeholder="Rating" name="rating" defaultValue={rating} />
                            <label className="fieldset-label">Book Content</label>
                            <input type="text" className="input w-full" placeholder="Book content" name="content" defaultValue={content || ""} />
                            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                            <button className="btn btn-neutral mt-4">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;