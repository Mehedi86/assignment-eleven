import React from 'react';
import useAuthInfo from '../hooks/useAuthInfo';
import Swal from 'sweetalert2';

const BorrowModal = ({ exactBook, handleQuantity, handleBorrowBtnUpdate }) => {
    const { user } = useAuthInfo();
    const date = (new Date().toISOString()).split('T');
    const { author, category, image, name, quantity, rating, subcategory, _id } = exactBook;

    const borrowBtnHandler = e => {
        const formData = new FormData(e.target);
        const borrowData = Object.fromEntries(formData);
        borrowData.image = image;
        borrowData.name = name;
        borrowData.bookId = _id;
        borrowData.borrowed_date = date[0];
        borrowData.category = category;
        borrowData.subcategory = subcategory;
        handleQuantity();

        fetch('https://assignment-eleven-server-black.vercel.app/borrowBooks', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(borrowData)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Successfully Borrowed!",
                    icon: "success",
                    draggable: true
                });
                handleQuantity();
                handleBorrowBtnUpdate();
            }
        })

    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-center mt-12">
                        <div className="card  w-full max-w-sm shrink-0">
                            <h2 className='text-2xl font-bold text-center mt-6'>Please Provide Some Information</h2>
                            <div className="card-body">
                                <form onSubmit={borrowBtnHandler} className="fieldset" method="dialog">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" placeholder="Name" name="name" defaultValue={user?.displayName} />
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="email" name="email" defaultValue={user?.email} />
                                    <label className="fieldset-label">Return Date</label>
                                    <input type="date" className="input" placeholder="Return Date" name="return_date" />
                                    <button className="btn btn-neutral mt-4">Submit</button>
                                </form>
                                <form method="dialog">
                                    <button className='btn'>Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BorrowModal;