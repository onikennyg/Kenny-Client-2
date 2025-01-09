import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard"
import Logout from "./pages/Logout";
import ForgotPassword from "./pages/ForgotPassword";

export const router = createBrowserRouter([

    {path: "/", element: <App/>},
    {path: "/about", element: <About/>},
    {path: "/contacts", element: <Contact/>},
    {path: "/signup", element: <Signup/>},
    {path: "/login", element: <Signin/>},
    {path: "/dashboard", element: <Dashboard/>},
    {path: "/logout", element: <Logout/>},
    {path: "/forgot-password", element: <ForgotPassword/>},



])