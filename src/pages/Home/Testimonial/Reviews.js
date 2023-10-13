import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://ecommerce-server-oin4da6ix-hasantalukder1234.vercel.app/review')
        .then(res=>res.json())
        .then(data =>{
            setReviews(data);
        })
    },[])

    return (
        <section>
            <SectionTitle 
            heading="Public Reviews"
            subHeading="What Our clients says"></SectionTitle>
           
           <Swiper 
           >
               {
                reviews.map(item=><SwiperSlide 
                key={item._id}>
                    <div className='m-24 flex flex-col items-center'>
                    <Rating style={{ maxWidth: 250 }} value={item.rating} readOnly />
                        <p>{item.details}</p>
                        <h3 className='text-3xl'>{item.name}</h3>
                    </div>
                </SwiperSlide>)
               }

           </Swiper>
           
        </section>
    );
};

export default Reviews;