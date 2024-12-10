import { useEffect, useState } from "react";
import { useMatch } from 'react-router-dom';    

export default function Single_product (){



    const{
        params: { id },
    } =useMatch('https://fakestoreapi.com/products/:id');

    const [get,setData] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(get => setData(get))
            .catch((error) => console.error("Error"))
    },[]);

    return(
        <>
            <div>
                {get ? (
                    <div className="product_detail">                                            
                            <div className="product">
                                <div className="img">
                                    <div className="product_img">
                                        <img src={get.image}/>
                                    </div>
                                    <div className="btn-group btn-group2">
                                        <button className="btn btn2">Add Cart</button>
                                        <button className="btn btn2">Buy Now</button>
                                    </div>
                                </div>
                                <div className="img_detail">
                                    <button className="close"><i class="fa-regular fa-circle-xmark"></i></button>
                                    <h2>{get.title}</h2>
                                    <p>{get.description}</p>
                                    <span className="ratting"> {get.rating.rate}<i class="fa-solid fa-star"></i></span>
                                    <p className="product_price">₹{get.price}</p>
                                </div>
                            </div>
                    </div>
                ):(
                    <></>
                )}
            </div>
        </>
    );
} 