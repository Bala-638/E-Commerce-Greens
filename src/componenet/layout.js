import { Outlet, useLocation } from "react-router-dom";
import Foooter from "./footer";
import Navbar from "./navbar2";
export default function Layout(){

    const location = useLocation()

    const login = location.pathname === "/login";
    const signup = location.pathname === "/signup";
    const products = location.pathname === '/products';

    return(
        <>
            {!products && !login && !signup && <Navbar />}
            <section className="section">
                <Outlet />
            </section>
            {!products && !login && !signup && <Foooter />}
        </>
    );
}