import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import { updateCurrentUser } from 'firebase/auth';
import Swal from 'sweetalert2'




const SignUp = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, UpdateUserProfile}  = useContext(AuthContext);
    const navigate = useNavigate();



    const onSubmit = data => {

        console.log(data);
        const email = data.email;
        const password = data.password;
        createUser(email, password)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser); 
            UpdateUserProfile(data.name, data.photoURL)
            .then(() =>{
              console.log('User Profile Updated');
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User update Successfully',
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/");
            })
            .catch(error =>{
                console.log(error);
            })
        })
    };
   

 

    return (

       <>
         
         <Helmet>
                <title>Baton|SignUp</title>
            </Helmet>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL")}  placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email")} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {require:true, minLength:6, maxLength:20, 
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/})} name='password' placeholder="password" className="input input-bordered" required />
                             {errors.password && <span>Password must be a Uppercase a lower case special character Letter 6 character and between 24 character</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                           
                        </div>
                    </form>
                    <Link to='/login'><p><small>Already Have an Account? Login Here</small></p></Link>
                </div>
            </div>
        </div></>
    );
};

export default SignUp;