import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import Class12 from "./components/Class12"
import Studymaterial from "./components/Studymaterial"
import Testseries from "./components/Testseries"
import More from "./components/More"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Class-12" element = {<Class12/>}/>
        <Route path = "/Test-series" element = {<Testseries/>}/>
        <Route path = "/Study-materials" element = {<Studymaterial/>}/>
        <Route path = "/More" element = {<More/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

