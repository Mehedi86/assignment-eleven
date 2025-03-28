import { object } from 'prop-types';
import React from 'react';

const AddBook = () => {
    const handleAddBook = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData);
        console.log(initialData)
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
                            <select defaultValue="Select a Category" className="select" name='category'>
                                <option hidden>Select a category</option>
                                <option value="Fiction">Fiction</option>
                                <option value="History">History</option>
                                <option value="Science">Science</option>
                                <option value="Technology">Technology</option>
                            </select>
                            <label className="fieldset-label">Subcategory</label>
                            <select defaultValue="Select a subcategory" className="select" name='subcategory'>
                                <option hidden>Select a subcategory</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Ancient History">Ancient History</option>
                                <option value="Modern History">Modern History</option>
                                <option value="Biographies">Biographies</option>
                                <option value="Physics">Physics</option>
                                <option value="Biology">Biology</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                            </select>
                            <label className="fieldset-label">Short Description:</label>
                            <input type="text" className="input w-full" placeholder="Description" name="description" />
                            <label className="fieldset-label">Rating</label>
                            <input type="text" className="input w-full" placeholder="Rating" name="rating" />
                            <label className="fieldset-label">Book Content</label>
                            <input type="text" className="input w-full" placeholder="Book content" name="content" />
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;