import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

const AddItems = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
        console.log(data)};
    console.log(errors);


    return (
        <div className='w-full px-10 py-14'>
            <Helmet>
                <title>Baton|Add Items</title>
            </Helmet>

            <div className=' grid justify-center my-5 mx-auto w-full'>
                <h2 className="text-4xl font-semibold text-center ">Add New Item</h2>
                <p className='text-orange-400 my-4 mx-auto'>----What's New----!!</p>


            </div>
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control w-full max-w-xs mt-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>

                    </label>
                    <input type="text" placeholder="Recipe Name"  {...register("name", {required: true, maxLength: 120})}
                     className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs mt-4">
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
                <div className="form-control w-full max-w-xs mt-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>

                    </label>
                    <input type="number" placeholder="Type here"
                     {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Details</span>

                    </label>
                    <textarea  {...register("details", { required: true })}
                     className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                <div className="form-control w-full max-w-xs mt-4">
                    <label className="label">
                        <span className="label-text">Pick a Image</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <input type="submit" className="btn btn-success btn-sm mt-4" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;