import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Main from './pages/Main';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;