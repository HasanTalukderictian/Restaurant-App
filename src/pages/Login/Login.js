import React, { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {


    const [disable, setDisable] = useState(true);


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, { replace: true });
            })
    }


    const handleValidateCaptcha = (e) => {

        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }else
        {
            setDisable(true)
        }
    }

    return (
        <> 
         <Helmet>
                <title>Baton|Login</title>
            </Helmet>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Captcha</span>
                            </label>
                            <input type="text"  onBlur={handleValidateCaptcha} name='captcha' placeholder="Type the Text above" className="input input-bordered" required />
                            <LoadCanvasTemplate />
                            

                        </div>
                        <div className="form-control mt-6">

                            <input type="submit" disabled={disable} className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                   <p><small>New Here? <Link to='/signup'>Create an Account</Link></small></p>
                   <SocialLogin></SocialLogin>
                </div>
            </div>
        </div></>
    );
};

export default Login;