import { useState,useEffect } from "react";



export default function Products() {

    const [data,setData] = useState([]);
    const [originalData,setOriginalData] = useState([])
    const [searchval,setSearchval] = useState('')
    const [editId ,setEditid] = useState('')
    const [editedText, setEditedText] = useState("");
    const [editPrice,setEditPrice] = useState('')



    useEffect(()=>{
        GetProducts()
    },[])

    function GetProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setData(data);
            setOriginalData(data)
            })
    }

    function Limit(limit){
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res => res.json())
            .then(data => setData(data))
    }

    function handleSearch(){
        if (searchval === ""){
            return setData(originalData);
        }  
        const filteredValue = originalData.filter((value) => value.title.toLowerCase().includes(searchval.toLowerCase()))  
        setData(filteredValue)
    }

    function Remove(id){
        fetch(`https://fakestoreapi.com/products/${id}`, { method:"DELETE" })
            .then(res => res.json())
            .then(() => setData((data)=>data.filter((get) => get.id !== id)))
    }

    function Edit(id,title,price){
        setEditid(id)
        setEditedText(title)
        setEditPrice(price)
    }

    function Save(id){
        fetch(`https://fakestoreapi.com/products/${id}`, { 
            method:"PUT",
            body: JSON.stringify({ title : editedText,price : editPrice})
        })
            .then(res => res.json())
            .then(() => {
                setData((preData) =>
                    preData.map((datas)=>
                        datas.id === id ? {...datas , title:editedText,price:editPrice}: datas))
                setEditid(null)
            })
       
    }


    return(
        <>
            <div className="allproduct">
                {data.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <td colSpan={3}>
                                    <div className ="search">
                                        <input 
                                            type="search"
                                            placeholder="Search Product"
                                            onChange={(event)=>{
                                                setSearchval(event.target.value);
                                                handleSearch();
                                            }
                                            }
                                        />
                                        <a onClick={handleSearch} className="searchclick">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </a>
                                    </div>
                                </td>
                                <td colSpan={2}>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle btn">
                                            View By
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" onClick={() => Limit(5)}>View by 5</a>
                                            <a className="dropdown-item" onClick={() => Limit(10)}>View by 10</a>
                                            <a className="dropdown-item" onClick={() => Limit(15)}>View by 15</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>S.NO</th>
                                <th>Product</th>
                                <th>Product Details</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            {data.map((get, index) => (
                             
                                <tr key={get.id}>
                                    <td>{index + 1}</td>
                                    <td><img src={get.image} alt="Product" /></td>
                                    <td>
                                        { get.id === editId ? (
                                            <input
                                                onChange={(event) => setEditedText(event.target.value)}
                                                value={editedText}

                                            />
                                        ):(
                                            get.title
                                        )}
                                    </td>
                                    <td>
                                        {get.id === editId ? (
                                            <input 
                                                className="editprice"
                                                type="number"
                                                value={editPrice}
                                                onChange={(event) => setEditPrice(event.target.value)}
                                            />
                                        ):(
                                            get.price
                                        )}
                                    </td>
                                    <td>
                                        {editId === get.id ? (
                                            <button className="product_list_btn" onClick={() => Save(get.id)}>Save</button>
                                        ):(
                                            <button className="product_list_btn" onClick={() => Edit(get.id,get.title,get.price)}>Edit</button>
                                        )}
                                            <button className="product_list_btn" onClick={() => Remove(get.id)}>Remove</button>
                                    </td>
                                </tr>
                               
                            ))}
                        </tbody>
                    </table>
                ):(
                    <>
                    </>
                )}
            </div>
        </>
    )
}














