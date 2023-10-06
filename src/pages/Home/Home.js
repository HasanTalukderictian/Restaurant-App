import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Types from '../Types/Types';
import MenuCategory from '../MenuCategory/MenuCategory';
import Featured from '../Featured/Featured';
import SpecialDish from '../SpecialDish/SpecialDish';
import Reviews from './Testimonial/Reviews';

const Home = () => {
    return (
        <div>
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