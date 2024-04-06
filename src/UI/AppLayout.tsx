import { Outlet } from "react-router-dom";
import Nav from "./Nav";
// import Home from "./Home";
import Footer from "./Footer";

export default function AppLayout(){

    return (
        <div>
                <Nav />
                <Outlet />
                <Footer />
        </div>
    )
}