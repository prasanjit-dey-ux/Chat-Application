import { useState } from "react";
import { assets } from "../assets/assets";

const SignUpPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., API call)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign-up successful!");
  };

  return (
    <div
      className="bg-white h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${assets.login_background})` }}
    >
      <div className="bg-off-white w-full max-w-sm p-10 rounded-2xl mx-auto flex flex-col justify-between items-center shadow-lg">
        {/* Icon Section */}
        <div className="self-center">
          <div className="bg-beige h-14 w-14 rounded-full flex justify-center items-center">
            <img src={assets.login_icon} alt="Login Icon" />
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mt-4">
          <h1 className="text-black text-3xl font-normal font-['Playfair-Display']">
            Create an Account
          </h1>
          <p className="font-[Roboto] text-base font-normal text-gray-600 mt-2">
            Join us and start chatting today!
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-6 mt-8 w-full"
        >
        {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-base font-normal font-[Roboto]">
              Name
            </label>
            <input
              className="h-10 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-base font-normal font-[Roboto]">
              Email
            </label>
            <input
              className="h-10 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-base font-normal font-[Roboto]">
              Password
            </label>
            <input
              className="h-10 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-black text-base font-normal font-[Roboto]">
              Confirm Password
            </label>
            <input
              className="h-10 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-off-white px-4 py-2 rounded-lg font-medium font-[Roboto] hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-6 text-center">
          <p className="font-[Roboto] text-base text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
