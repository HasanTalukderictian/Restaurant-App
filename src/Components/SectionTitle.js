import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
       <section>
         <div className='text-center my-4 py-4'>
            <p className='text-red-700'>{subHeading}</p>
            <h2 className='text-4xl text-yellow-500 uppercase my-2'>{heading}</h2>
        </div>
       </section>
    );
};

export default SectionTitle;