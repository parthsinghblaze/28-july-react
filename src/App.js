import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";
import Cocktail from "./pages/Cocktail";
import CocktailDetail from "./pages/CocktailDetail";
import ParentComponent from "./component/ParentComponent";
import MoveUp from "./component/MoveUp";
import PrivatePage from "./pages/PrivatePage";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./pages/Login";
import { createContext, useState } from "react";

export const LoginContext = createContext()

function App() {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <>
            <LoginContext.Provider value={{ isLogin, setIsLogin }}>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:id" element={<SingleCourse />} />
                    <Route path="/cocktail" element={<Cocktail />} />
                    <Route path="/cocktail/:id" element={<PrivateRoute><CocktailDetail /></PrivateRoute>} />
                    <Route path="/privatePage" element={<PrivateRoute><PrivatePage /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </LoginContext.Provider>
        </>
    );
}

// SPA

export default App;
