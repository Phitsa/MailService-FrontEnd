import { setupPageInteractions } from './javaScript/accessDomManipulation';
import { useEffect, useState } from 'react';

const Access = () => {
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  useEffect(() => {
    setupPageInteractions(setRegisterErrorMessage, setLoginErrorMessage);
  }, []);

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gray-200'>
      <main id="main" className="relative lg:w-4/5 lg:h-4/5 w-full h-3/5 md:m-0 m-2 bg-white shadow-lg rounded-lg flex justify-center md:justify-start transition-all duration-300">
        <section id="pinkSection" className="hidden transition-all z-10 duration-500 ease-in-out w-1/2 h-full bg-cerise md:flex flex-col items-center justify-center rounded-l-lg">
          <h1 id="h1" className="text-3xl lg:text-4xl text-center text-white font-semibold mb-2">Dont have an Account?</h1>
          <p id="p" className="text-lg lg:text-xl text-center text-pink-200 font-semibold mb-4">Sign Up now!</p>
          <button id="changePage" className="bg-white text-cerise font-semibold text-lg rounded-3xl w-36 h-12 hover:bg-cerise hover:w-40 hover:h-14 transition-all duration-500 hover:ring-2 ring-white hover:text-white" type="button">Sign up</button>
        </section>

        <section id="registerSection" className="absolute transition-all opacity-0 duration-300 ease-in-out sm:w-full w-full md:w-1/2 h-full flex flex-col items-center justify-center rounded-r-lg">
          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-semibold text-cerise mb-1">Create Account</h1>
            <p className="text-gray-400">Fill in with your personal data</p>
          </div>
          <form className="w-3/4 lg:w-2/3" id="registerForm">
            <div className="flex flex-col mb-2">
              <label className="text-gray-600" htmlFor="registerName">Email</label>
              <input id="registerEmail" className="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="text" placeholder="Type your email" required />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600" htmlFor="registerPassword">Password</label>
              <input id="registerPassword" className="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="password" placeholder="Type your password" required />
            </div>
            {registerErrorMessage && <div className="text-red-500">{registerErrorMessage}</div>}
            <div className="flex justify-center mt-6 mb-2">
              <button type="submit" className="bg-cerise text-white font-semibold text-lg rounded-3xl w-36 h-12 hover:bg-white hover:w-40 transition-all duration-500 hover:ring-2 ring-pink-400 hover:text-pink-400">
                Sign up
              </button>
            </div>
          </form>
        </section>

        <section id="loginSection" className="absolute md:translate-x-[100%] z-0 w-5/6 md:w-1/2 h-full transition-all duration-300 flex flex-col items-center justify-center rounded-l-lg">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-semibold text-cerise mb-1">Login</h1>
            <p className="text-gray-400">Type your credentials</p>
          </div>
          <form className="w-3/4 lg:w-2/3" action="login" id='loginForm'>
            <div className="flex flex-col mb-2">
              <label className="text-gray-600" htmlFor="loginName">Email</label>
              <input id="loginName" className="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="text" placeholder="Type your email" required />
            </div>
            <div className="flex flex-col ">
              <label className="text-gray-600" htmlFor="loginPassword">Password</label>
              <input id="loginPassword" className="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="password" placeholder="Type your password" required />
            </div>
            {loginErrorMessage && <div className="text-red-500">{loginErrorMessage}</div>}
            <div className="flex justify-center mt-6 mb-2">
              <button type="submit" className="bg-cerise text-white font-semibold text-lg rounded-3xl w-36 h-12 hover:bg-white hover:w-40 transition-all duration-500 hover:ring-2 ring-pink-400 hover:text-pink-400">
                Login
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Access;