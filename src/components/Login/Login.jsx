import { FaGoogle, FaGithub } from 'react-icons/fa';
import { } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();


const Login = () => {
  const {signIn, googleSignIn} = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from.pathname || '/'

  const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
      .then(result => {
        const user = result.user;
        navigate(from, {replace: true})
        console.log(user);
      })
      .catch(err => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
    .then(result => {
      const user = result.user;
      navigate('/');
      console.log(user);
    })
    .catch(err => console.error(err));
  };

  const handleGithubLogin = (githubProvider) => {

  };
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name='email'
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name='password'
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p>Don't Have an Account?Please <Link to='/register'  className='text-blue-500 underline'>Login</Link></p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login"/>
            </div>
            
            <div className="form-control mt-6">
                <p className="text-center text-xl text-blue-500 font-semibold font-mono mb-3">Login with social media</p>
              <button onClick={handleGoogleSignIn} className="btn btn-ghost border-black mb-3 text-red-400"><FaGoogle className='text-blue-500 text-xl mr-2'></FaGoogle> GOOGLE</button>
              <button className="btn btn-ghost border-black"><FaGithub className='text-xl mr-2'></FaGithub>GITHUB</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
