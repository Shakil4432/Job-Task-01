import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

export default function Login() {
    const { user, userSignIn2,userSignIn,userGithubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        userSignIn2(email, password)
            .then(result => {
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const handleLogin = loginProvider => {
        loginProvider()
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                Don’t have an account?
                                <Link to="/register" className='text-blue-400'>Register</Link>
                            </div>
                        </form>
                        <div className='flex justify-center items-center gap-5'>
                            <div>
                                <button onClick={() => handleLogin(userSignIn)}><FcGoogle /></button>
                            </div>
                            <div>
                                <button onClick={() => handleLogin(userGithubSignIn)}><FaGithub /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}