import "./App.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignupPage"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element ={<HomePage />}/>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/signup" element = {<SignUpPage/>}/>
        <Route path="/chats" element = {<ChatPage/>} />
      </Routes>
    </>
  )
}

export default App
