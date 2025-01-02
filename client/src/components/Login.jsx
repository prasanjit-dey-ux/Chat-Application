

const Login = () => {
  return (
    <>
        <div className="bg-off-white w-full max-w-md p-5 rounded-2xl mx-auto flex flex-col justify-between items-center ">
            <div className="justify-between items-start flex">
                <div className="bg-beige h-14 w-14 rounded-full justify-between items-center flex">
                    {/* ICON */}
                </div>
            </div>
            <div className="mt-4 text-center">
                <h1 className="text-black text-3xl font-normal font-['Playfair-Display']">Welcome Back!</h1>
                <p className="font-[Roboto] text-base font-normal text-gray-111 p-2">Log in to continue chatting</p>
            </div>
            <div className="mt-8 w-full">
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 ">
                    <label className="text-black text-base font-normal font-[Roboto]">Email</label>
                    <input 
                        className="h-10 rounded-lg border border-gray-2 px-4 focus:outline-none"
                        type="email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-black text-base font-normal font-[Roboto]">Password</label>
                    <input
                        className="h-10 rounded-lg border border-gray-2 px-0"
                        type="password"
                        
                    />
                    <a>Forgot Password?</a>
                </div>

                <div className="bg-black px-4 py-2 rounded-lg focus:outline-none focus flex justify-center items-center">
                    <button className="text-off-white  ">Log In</button>
                </div>
            </form>
            </div>
        </div>
    </>
  )
}

export default Login