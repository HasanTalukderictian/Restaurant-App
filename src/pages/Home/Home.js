import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Types from '../Types/Types';
import MenuCategory from '../MenuCategory/MenuCategory';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Types></Types>
           <MenuCategory></MenuCategory>
        </div>
    );
};

export default Home;