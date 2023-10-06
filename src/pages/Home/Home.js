import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Types from '../Types/Types';
import MenuCategory from '../MenuCategory/MenuCategory';
import Featured from '../Featured/Featured';
import SpecialDish from '../SpecialDish/SpecialDish';
import Reviews from './Testimonial/Reviews';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Baton|Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <Types></Types>
           <MenuCategory></MenuCategory>
           <Featured></Featured>
           <SpecialDish></SpecialDish>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;