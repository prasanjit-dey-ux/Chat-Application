import { assets } from "../assets/assets"
import Login from "../components/Login"



const HomePage = () => {
  return (
    <>
      <div className="bg-white h-[100vh] flex justify-center items-center bg-cover bg-center" style= {{backgroundImage: `url(${assets.login_background})`}}>
        <Login />
      </div>
    </>
  )
}

export default HomePage