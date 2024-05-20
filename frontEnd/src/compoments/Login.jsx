import React from 'react'

const Login = () => {
  return (
    <div className="loginsignup w-[100%] h-[110vh] bg-fuchsia-100 pt-[70px] ">
      <div className="container w-[580px] h-[90vh] bg-white m-auto  py-[40px] px-[60px]">
        <h1 className="my-5 mx-0">Sign Up</h1>
        <div className="fields flex flex-col mt-7 gap-[29px]">
          <input
            className="h-[72px] w-[100%] pl-5 border-solid border-[1px] border-stone-300 outline-none text-lg text-zinc-600"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-[72px] w-[100%] pl-5 border-solid border-[1px] border-stone-300 outline-none text-lg text-zinc-600"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-[72px] w-[100%] pl-5 border-solid border-[1px] border-stone-300 outline-none text-lg text-zinc-600"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="h-[60px] w-[100%] text-white bg-red-500 mt-7 border-none font-medium cursor-pointer text-2xl">
          Continue
        </button>
        <p className="login mt-[20px] font-medium text-zinc-600 text-lg">
          Already have an account?{" "}
          <span className="text-red-500 font-semibold ">Login here</span>
        </p>
        <div className="agree flex items-center mt-[25px] gap-[20px] text-zinc-600 text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Login
