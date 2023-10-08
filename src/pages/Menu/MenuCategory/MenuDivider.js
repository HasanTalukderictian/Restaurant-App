import React from 'react';
import Covered from '../../../Shared/Cover/Covered';
import MenuDesign from '../../../Shared/MenuItem/MenuDesign';
import { Link } from 'react-router-dom';

const MenuDivider = ({ items, title, img }) => {
    return (
        <div> 
            {title && <Covered img={img} title={title}></Covered>}

            <div className='grid md:grid-cols-2 gap-10 my-16 py-4 px-3'>
                {
                    items.map(item => <MenuDesign
                        key={item._id}
                        item={item}></MenuDesign>)
                }
            </div>
            <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 mt-4 mb-4'>Order Now</button></Link>
        </div>
    );
};

export default MenuDivider;