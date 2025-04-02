import React from 'react';
import useDynamicTitle from '../hooks/useDynamicTitle';

const ErrorPage = () => {
    useDynamicTitle('Error')
    return (
        <div className='min-h-[600px] flex justify-center items-center'>
            <h2 className='text-9xl font-bold text-teal-600'>404</h2>
        </div>
    );
};

export default ErrorPage;