import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./layout";
import Categories from "./categories";
import Products from "./products";
import Jewellery from "./jewelerry";
import Electronics from "./electronics";
import Mens_Clothing from "./men's_clothing";
import WomensClothing from "./womens_clothing";
import Login from "./login";
import Signup from "./sign";

export default function Rout(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Categories />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/jewelery" element={<Jewellery />} />
                        <Route path="/electronics" element={<Electronics />} />
                        <Route path="/men's clothing" element={<Mens_Clothing />}/>
                        <Route path="/women's clothing" element={<WomensClothing />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/signup" element={<Signup />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
        
    )
}