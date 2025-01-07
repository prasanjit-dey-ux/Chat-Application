import { assets } from "../assets/assets"


const LoginPage = () => {
  return (
    <>
        <div className="bg-white h-[100vh] flex justify-center items-center bg-cover bg-center" style= {{backgroundImage: `url(${assets.login_background})`}}>
        <div className="bg-off-white w-full max-w-sm p-10 rounded-2xl mx-auto flex flex-col justify-between items-center ">
            <div className="justify-between items-start flex">
                <div className="bg-beige h-14 w-14 rounded-full flex justify-center items-center">
                    {/* ICON */}
                    <div className="flex justify-between items-center">
                        <img src={assets.login_icon} alt="" />
                    </div>
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
                        className="h-10 rounded-lg border border-gray-2 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400"
                        type="email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-black text-base font-normal font-[Roboto]">Password</label>
                    <input
                        className="h-10 rounded-lg border border-gray-2 px-4 focus:outline-none focus:ring-2 focus:ring-slate-400"
                        type="password"
                        
                    />
                    <div className="flex justify-end items-end font-normal text-sm font-[Roboto]">
                        <a href="/forgotPassword">Forgot Password?</a>
                    </div>
                    
                </div>

                <div className="bg-black gap-2 px-4 py-2 rounded-lg flex justify-center items-center">
                    <button className="text-off-white  ">Log In</button>
                </div>
            </form>

                 <div className="mt-6 text-center">
                    <p className="font-[Roboto] text-base text-gray-600">
                        New here?{" "}
                        <a
                            href="/signup"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default LoginPage