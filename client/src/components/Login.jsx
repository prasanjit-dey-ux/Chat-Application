const Login = () => {
  return (
    <div className="bg-white max-w-sm p-8 rounded-lg shadow-md mx-auto space-y-6">
      <div className="bg-beige h-14 w-14 rounded-full flex items-center justify-center">
        {/* ICON */}
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold text-gray-800 font-playfair">Welcome Back!</h1>
        <p className="text-sm text-gray-500 font-roboto">Log in to continue chatting</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-roboto text-gray-700">Email</label>
          <input 
            className="w-full h-12 rounded-md border border-gray-300 px-4 text-sm focus:ring-2 focus:ring-blue-400"
            type="email"
          />
        </div>
        <div>
          <label className="block text-sm font-roboto text-gray-700">Password</label>
          <input
            className="w-full h-12 rounded-md border border-gray-300 px-4 text-sm focus:ring-2 focus:ring-blue-400"
            type="password"
          />
          <a className="text-xs text-blue-500 hover:underline block mt-1">Forgot Password?</a>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
