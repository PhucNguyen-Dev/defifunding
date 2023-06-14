import React from 'react'
import '@passageidentity/passage-elements/passage-auth';


const Login = () => {

 
  return (
    
    <div className="min-h-screen flex flex-col mt-20 py-5 sm:px-6 lg:px-8 rounded-[20px] bg-transparent
     bg-opacity-25 shadow-shadowOne ">
   
          <div className=" text-9xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-teal-600 font-bold lgl:text-6xl">
              DefiFunds
            <h2 className=" text-start text-3xl font-bold text-white">
                 A new generation platform for contribution.
            </h2>
          </div>
          <div className="flex justify-end">
            <div className=" container bg-yellow-300 rounded-[20px] w-fit ">
              <passage-auth app-id="uLld4TjJcUQW073uRWG7RTzN"></passage-auth>
            </div>
          </div>
          <div className="flex space-x-28">
            <div className="bannerIcon text-cyan-500 -rotate-45 -mt-60 ml-8">
              Raise Funds
            </div>
            
            <div className="bannerIcon text-white rotate-12 -mt-64 ">
              Sponsor
            </div>
            <div className="bannerIcon text-purple-800 rotate-45 -mt-48 ">
              Branding Your Own
            </div>
          </div>
          <div className="bannerIcon text-yellow-400 -rotate-12">
              Connect Wallet
          </div>
          <div className="bannerIcon text-green-400  mt-24 ml-32">
              Share your project to anywhere
          </div>
          <div className="bannerIcon text-rose-600 -rotate-45 -mt-60 ml-96">
              Safety Transfer
          </div>
          <span class="absolute top-1/4 left-1/3 w-0.5 h-32 bg-red-400 transform  rotate-90 -skew-x-12 -translate-y-1/2 -ml-12 "></span>
          <span class="absolute top-1/4 left-1/2 w-0.5 h-32 bg-red-400 transform  rotate-90 skew-x-12 -translate-y-1/2 mt-6 "></span>
          <span class="absolute top-1/3 left w-0.5 h-44 bg-red-400 transform -skew-x-12 -mt-2 ml-8"></span>
          <span class="absolute top-1/3 left-2/3 w-0.5 h-40 bg-red-400 transform rotate-90  -translate-y-1/2 mt-16 -ml-32"></span>
          <span class="absolute top-1/3 left-2/3 w-0.5 h-40 bg-red-400 transform -rotate-45 skew-x-12 -translate-y-1/2 mt-60 -ml-72"></span>
          <span class="absolute top-1/3 left w-0.5 h-40 bg-red-400 transform -rotate-45 skew-x-12 -translate-y-1/2 mt-64 ml-16"></span>
    </div>
  )
}

export default Login