import { useState,useEffect } from "react"

export default function Navbar(){

    const [data,setData] =  useState([]);

    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => setFilterData(data))

    }, []);


    function handleSearchClick(value) {

        if (value === "") { setData([]);  return;}

        const filterBySearch = filterData.filter((item) => item.toLowerCase().includes(value.toLowerCase()))

        setData(filterBySearch);

    }


    return(
        <navbar id="product_view" class="navbar">
            <div class="nav">
                <div>
                    {/* <img src={Greens} /> */}
                    <a href='/'><h1>Greens</h1></a>
                </div>
                <div class="search">
                    <input type="search" placeholder="Search" onChange={ event => handleSearchClick(event.target.value)} />
                    <a><i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <div className="nav-search-result">
                    {data.map((value) => (
                        <>
                            <a href={value}><i class="fa-brands fa-searchengin"></i> {value}</a>    
                        </>
                    ))}
                </div>
                <div class="bttn">
                    <a className="button" href="/signup">Sign Up</a>
                    <a className="button" href="/login">Log In</a>
                </div>
            </div>
        </navbar>
    )
}