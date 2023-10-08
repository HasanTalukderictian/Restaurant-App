import React, { useState } from 'react';
import Covered from '../../../Shared/Cover/Covered';
import CoverImg from '../../../assests/new/Cover.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    
    const categories = ['salad', 'pizza', 'soup','dessert','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const desserts = menu.filter(item=>item.category ==="dessert");
    const soup = menu.filter(item=>item.category ==="soup");
    const salad = menu.filter(item=>item.category ==="salad");
    const pizza = menu.filter(item=>item.category ==="pizza");
    const drinks = menu.filter(item=>item.category ==="drinks");


    return (
        <div>
              <Helmet>
                <title>Baton|Order</title>
            </Helmet>

            <Covered img={CoverImg} title="Order Food" details="Test and Delicious"></Covered>

            <Tabs className="my-4 mb-3" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList className="ml-40 mr-40 mb-4" >
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-2 gap-10'>
                   {
                        salad.map(item=><FoodCard
                        key={item._id}
                        item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-2 gap-10'>
                   {
                        pizza.map(item=><FoodCard
                        key={item._id}
                        item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-2 gap-10'>
                   {
                        soup.map(item=><FoodCard
                        key={item._id}
                        item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-2 gap-10'>
                   {
                        desserts.map(item=><FoodCard
                        key={item._id}
                        item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-2 gap-10'>
                   {
                        drinks.map(item=><FoodCard
                        key={item._id}
                        item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;