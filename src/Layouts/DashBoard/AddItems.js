import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiousSecure';
import Swal from 'sweetalert2';


const Image_hosting_token ='056aa7da78dbf2cccdd13c6d73b05bfc';
console.log(Image_hosting_token);


const AddItems = () => {


   
    const [axiosSecure] =useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_hosting_token}`
 
   
    const onSubmit = data => {
        const formData =  new FormData();
        formData.append('image',data.image[0]);
        
        fetch(image_hosting_url,{
            method:"POST",
            body:formData
        } )
        .then(res => res.json())
        .then(ImgResponse => {
           if(ImgResponse.success){
            const imgURL = ImgResponse.data.display_url;
            const {category, name, price, recipe} = data;
            const newItem = {name, price :parseFloat(price),category, recipe, image:imgURL};
            console.log(newItem);
            axiosSecure.post('/menu',newItem)
            .then(data =>{
                console.log('after posting new menu item', data.data);
                if(data.data.insertedId){
                   reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
           }
        })
    };
  


    return (
        <div className='w-full px-10 py-14'>
            <Helmet>
                <title>Baton|Add Items</title>
            </Helmet>

            <div className=' grid justify-center my-5 mx-auto w-full'>
                <h2 className="text-4xl font-semibold text-center uppercase ">Add New Item</h2>
                <p className='text-orange-400 my-4 mx-auto'>----What's New----!!</p>


            </div>
            <form className='bg-slate-200 rounded' onSubmit={handleSubmit(onSubmit)} >

                <div className='my-4 py-4 px-4'>
                    <div className="form-control w-full  mt-4">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>

                        </label>
                        <input type="text" placeholder="Recipe Name"  {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />

                    </div>

                    <div className='flex'>
                        <div className="form-control w-full  mt-4">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select {...register("category", { required: true })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Pizza</option>
                                <option>Dessert</option>
                                <option>Salad</option>
                                <option>Soup</option>
                                <option>Drinks</option>
                            </select>

                        </div>
                        <div className="form-control w-full ml-4  mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>

                            </label>
                            <input type="number" placeholder="Type here"
                                {...register("price", { required: true })} className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text"> Recipe Details</span>

                        </label>
                        <textarea  {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </div>
                    <div className="form-control w-full  mt-4">
                        <label className="label">
                            <span className="label-text">Pick a Image</span>

                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />

                    </div>
                    <div className=''>
                        <input type="submit" className="btn btn-success btn-sm mt-4 " value="Add Item" />
                    </div>
                </div>
            </form>
        </div>
    );
    
};


export default AddItems;