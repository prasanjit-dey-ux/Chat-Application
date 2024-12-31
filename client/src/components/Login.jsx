

const Login = () => {
  return (
    <>
        <div className="bg-off-white max-w-md p-10 rounded-2xl mx-auto">
            <div className="bg-beige h-14 w-14 rounded-full">
                {/* ICON */}
            </div>
            <div>
                <h1>Welcome Back!</h1>
                <p>Log in to continue chatting</p>
            </div>
            <form action="">
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input 
                        type="password"
                        placeholder="Enter your password"
                    />
                    <p>Forgot Password?</p>
                </div>

                <div className="bg-black px-4 py-2 rounded-lg focus:outline-none focus">
                    <button>Log In</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login