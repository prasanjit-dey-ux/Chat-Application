

const Login = () => {
  return (
    <>
        <div className="bg-[]">
            <div>
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

                <div>
                    <button>Log In</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login