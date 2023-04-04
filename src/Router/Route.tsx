import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { Login } from "../Pages/Login";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
            <Route path='/livros' element={<Home />} />
        </Routes>
    )
}