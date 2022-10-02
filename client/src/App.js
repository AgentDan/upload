import './App.css'
import {Routes, Route} from "react-router-dom"

import Main4 from "./components/Main4"
import SingleBlock from "./components/SingleBlock"
import AddBlog from "./components/AddBlog";

function App() {
    return (
        <div>
            <Routes>
            <Route path="/single/:id" element={<SingleBlock/>}/>
            <Route path="/addblog" element={<AddBlog/>}/>
            <Route path="/" element={<Main4/>}/>
            <Route path="*" element={<Main4/>}/>
            </Routes>
        </div>
    )
}

export default App
