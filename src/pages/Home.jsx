import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import useDynamicTitle from '../hooks/useDynamicTitle';

const Home = () => {
    useDynamicTitle('Home');
    return (
        <div>
            <div className="bg-yellow-100 p-3 rounded text-center text-sm text-yellow-800">
                <h2>⚠️ To use this app on mobile, please allow third-party cookies in your browser settings. Go to: Chrome → Settings → Site Settings → Third-party-Cookies → Add site exception → paste this URL : silly-cobbler-5517a0.netlify.app</h2>
            </div>

            <Banner />
            <Categories />
        </div>
    );
};

export default Home;