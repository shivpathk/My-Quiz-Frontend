import { useState } from "react";

function RegisterationForm(props) {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confPassword , setConfPassword] = useState('')

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/auth/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        password,
        confPassword
      }),
    })
    const data = await response.json()

    if(data.user){
      alert ('registration successful')
      window.location.href = '/login'
    }
  }

  return (
    <div className="bg-rose-300  w-full py-[20px]">
      <div className="max-w-[1240px] mx-auto text-center  font-bold  my-[120px]">
        <form className="text-[22px]"
        onSubmit={handleSubmit}>
          <div className="p-5">
            <label className="mr-10" htmlFor="name">
              Name
            </label>
            <input
              className="ml-12 font-[light] pl-3"
              type="text"
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter Your Name Here"
            />
          </div>
          <div className="p-5">
            <label className="mr-10 " htmlFor="email">
              Email Id
            </label>
            <input
              className="ml-10  font-[light] pl-3"
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Your Email Id here"
            />
          </div>
          <div className="p-5">
            <label className="mr-10" htmlFor="password">
              Password
            </label>
            <input
              className="ml-5  font-[light] pl-3"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter Your Password Here"
            />
          </div>
          <div className="mr-10 p-5">
            <label htmlFor="password">Confirm Password</label>
            <input
              className="ml-5  font-[light] pl-3"
              type="text"
              onChange={(e)=>{setConfPassword(e.target.value)}} 
              placeholder="Enter Password Again"
            />
          </div>
          <button
            className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 
        bg-[black] mt-5 text-white p-3 rounded"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterationForm;
