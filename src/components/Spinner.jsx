import React from 'react';

const Spinner = () => {
    return (
        <div className='min-h-[600px] flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Spinner;