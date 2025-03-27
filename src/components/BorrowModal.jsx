import React from 'react';
import useAuthInfo from '../hooks/useAuthInfo';

const BorrowModal = () => {
    const { user } = useAuthInfo();
    const borrowBtnHandler = e => {
        // e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        // const email = form.email.value;
        const date = form.date.value;

    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-center mt-12">
                        <div className="card  w-full max-w-sm shrink-0">
                            <h2 className='text-2xl font-bold text-center mt-6'>Please Provide Some Information</h2>
                            <div className="card-body">
                                <form onSubmit={borrowBtnHandler} method="dialog" className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" placeholder="Name" name="name" defaultValue={user?.displayName} />
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="email" name="email" defaultValue={user?.email} />
                                    <label className="fieldset-label">Return Date</label>
                                    <input type="date" className="input" placeholder="Return Date" name="date" />
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