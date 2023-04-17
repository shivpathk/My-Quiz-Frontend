function LoginForm(){
    return <div>
        <div className="bg-rose-300 w-full py-[50px]">
      <div className="max-w-[1240px] mx-auto text-center  font-bold  my-[120px]">
        <form className="text-[22px]">
          <div className="p-5">
            <label className="mr-10 " htmlFor="email">
              Email Id
            </label>
            <input
              className="ml-10  font-[light] pl-3"
              type="email"
              placeholder="Enter Your Email Id here"
              id="email"
            />
          </div>
          <div className="p-5">
            <label className="mr-10" htmlFor="password">
              Password
            </label>
            <input
              className="ml-5  font-[light] pl-3"
              type="password"
              placeholder="Enter Your Password Here"
              id="password"
            />
          </div>
          <button
            className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 
        bg-[black] mt-5 text-white p-3 rounded"
            type="button"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
    </div>
}

export default LoginForm