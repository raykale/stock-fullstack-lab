import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Dashborad from "./pages/Dashborad/Dashborad"
import Stock from "./pages/Stock/Stock"
import Nav from "./components/Nav/Nav"

export default function App() {
    return(
        <div classname="App">
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path ="/about" element={<About/>}/>
                <Route path ="/stocks/:symbol" element={<Stockt/>}/>
                <Route path ="/stocks" element={<Dashborad/>}/>
            </Routes>
        </div>
    )
}