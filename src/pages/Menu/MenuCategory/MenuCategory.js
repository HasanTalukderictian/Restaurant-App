import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Covered from '../../../Shared/Cover/Covered';



const MenuCategory = ({items, title, coverImage}) => {
    
   
    
    return (
        <div>

            { title && <Covered img={coverImage} title={title}></Covered>}

             <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item =><MenuItem
                    key={item._id}
                    item ={item}
                    title={title}></MenuItem>)
                }
             </div> 
             
             
        </div>
    );
};

export default MenuCategory;