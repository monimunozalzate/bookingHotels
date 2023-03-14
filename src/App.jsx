import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./routes/home/Home";
import LoginPage from "./routes/loginPage/LoginPage";
import SignUpPage from "./routes/signinPage/SignUpPage";
import DetailsPage from "./routes/detailsPage/DetailsPage";
import Hamburguer from "./components/hamburguer/Hamburguer";


function App() {
    return (
        <div className="app">
            {/* <DetailsPage/> */}
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/productDetails" element={<DetailsPage/>} />
                    <Route path="/signUp" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
