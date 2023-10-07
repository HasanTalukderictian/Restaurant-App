import React from 'react';
import Covered from '../../../Shared/Cover/Covered';
import MenuDesign from '../../../Shared/MenuItem/MenuDesign';

const MenuDivider = ({ items, title, img }) => {
    return (
        <div> 
            {title && <Covered img={img} title={title}></Covered>}

            <div className='grid md:grid-cols-2 gap-10 mt-16 py-4 px-3'>
                {
                    items.map(item => <MenuDesign
                        key={item._id}
                        item={item}></MenuDesign>)
                }
            </div>
        </div>
    );
};

export default MenuDivider;