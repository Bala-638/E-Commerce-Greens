import { useEffect, useState } from  "react";
import {EditableText} from "@blueprintjs/core";
export default function Products (){

    const [data,setData] =  useState([]);

    useEffect(() => {

        GetProducts()

    }, []);



    function Limit(){

        fetch(`https://fakestoreapi.com/products?limit=5`)
        .then(response => response.json())
        .then(data => setData(data))   
    }
    function Limit10(){

        fetch(`https://fakestoreapi.com/products?limit=10`)
        .then(response => response.json())
        .then(data => setData(data))   
    }
    function Limit15(){

        fetch(`https://fakestoreapi.com/products?limit=15`)
        .then(response => response.json())
        .then(data => setData(data))   
    }
        


    

    function GetProducts(){
        fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(data => setData(data))
    }

    const [searchVal, setSearchVal] = useState("");

    function handleSearchClick() {

        if (searchVal === "") { setData(data); return; }
        const filterBySearch = data.filter((item) => {
            if (item.title.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setData(filterBySearch);
    }

    function Remove(id){
        
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res => res.json())
            .then(data => {setData((data) => {
                return data.filter(get => get.id !== id)
            })
        })
            // GetProducts();
        
    }



    function Edit(id){

        const Edit_data = data.find((values) => values.id === id)
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:'PUT',
            body:JSON.stringify(Edit_data)
        })
        .then(response => response.json())
        .then(data => {})
         
    }

    function HandleInput(id,key,value){
        setData(data => {
            return data.map(values =>{
                return (values.id === id ) ? ({...values,[key]:value}):(values)
            })
        })
    }
    





    return(
        <>
            <div className="allproduct">
                {data ? (
                     <table className="table">
                        <tr>
                            <td colSpan={3}>
                               <div class="search">
                                    <input type="search" onChange={ e => setSearchVal(e.target.value)} placeholder="Search" />
                                    <a className="searchclick" onClick={handleSearchClick}><i class="fa-solid fa-magnifying-glass"></i></a>
                                </div>
                            </td>
                            <td colSpan={2}>
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton">
                                        View By
                                    </button>
                                    <div class="dropdown-menu" >
                                        <a class="dropdown-item" onClick={Limit} >View by 5</a>
                                        <a class="dropdown-item" onClick={Limit10} >View by 10</a>
                                        <a class="dropdown-item" onClick={Limit15} >View by 15</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                     <tr>
                         <th>S.NO</th>
                         <th>Product</th>
                         <th>Product Details</th>
                         <th>Price</th>
                         <th>Acction</th>
                     </tr>
                     {data.map((get,index) =>
                     <>
                     <tr key={get.id}>
                         <td>{index + 1}</td>
                         <td><img src={get.image}/></td>
                         <td><EditableText value={get.title} onChange={(value) => HandleInput(get.id,"title",value)} /></td>
                         <td>{get.price}</td>
                         <td><button className="product_list_btn" onClick={() => Remove(get.id)}>Remove</button>
                         <button className="product_list_btn" onClick={() => Edit(get.id)}>Update</button></td>
                         
                     </tr>

                        
                     </>)}      
                 </table>
                ):(
                    <p>Please Waiting.....</p>
                )}

            </div>
            </>

    );
}