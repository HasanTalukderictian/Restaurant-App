import React, { useEffect, useState } from 'react';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = () => {
    // const [menu] = useMenu();
    // const popular = menu.filter(item => item.category === 'popular');
    const [menu, setMenu] = useState([]);


   useEffect(() => {
            fetch('menu.json')
            .then(res => res.json())
            .then(data=>{
                const popularItems = data.filter(item => item.category ==='popular');
                setMenu(popularItems);
            })
   }, [])


    return (

        <section className='my-6 bg-stone-400'>
            <SectionTitle
                heading={"Popular Items"}
                subHeading={"From 11 am to 10 pm"}>

            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
           
        </section>

    );
};

export default MenuCategory;