import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import useDynamicTitle from '../hooks/useDynamicTitle';

const Home = () => {
    useDynamicTitle('Home');
    return (
        <div>
            <Banner/>
            <Categories/>
        </div>
    );
};

export default Home;