import React from 'react';
import { Helmet } from 'react-helmet-async';
import Covered from '../../../Shared/Cover/Covered';
import menuImg from '../../../assests/backMenu.jpg';
import DessertsImage from '../../../assests/desserts.jpg';
import PizzaImg from '../../../assests/pizza-bg.jpg';
import saladImg from '../../../assests/salad.jpg';
import soupImg from '../../../assests/soup.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import MenuDivider from '../MenuCategory/MenuDivider';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item=>item.category ==="dessert");
    const pizza = menu.filter(item=>item.category ==="pizza");
    const salad = menu.filter(item=>item.category ==="salad");
    const soup = menu.filter(item=>item.category ==="soup");
    const offered = menu.filter(item=>item.category ==="offered");
    console.log(offered);
    return (
        <div>
            <Helmet>
                <title>Baton|Menu</title>
            </Helmet>
            <Covered img={menuImg}
             title="Our Menu"
            ></Covered>
            <SectionTitle
            subHeading="Do not Miss"
            heading="Today's Offered">

            </SectionTitle>
             {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>
            
            {/* desserts menu item */}
            
            <MenuDivider items={desserts} title="desserts" img={DessertsImage}></MenuDivider>
            <MenuCategory items={pizza} title="pizza" img={PizzaImg}></MenuCategory>
            <MenuDivider items={salad} title="salad" img={saladImg}></MenuDivider>
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

            
        </div>
    );
};

export default Menu;