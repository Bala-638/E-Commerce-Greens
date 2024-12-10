import { Outlet } from "react-router-dom";
import Foooter from "./footer";
import Navbar from "./navbar";
export default function Layout(){
    return(
        <>
            <Navbar />
            <section className="section">
                <Outlet />
            </section>
            <Foooter />
        </>
    );
}