import { useState,useEffect } from "react";


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
        <>
        <div className="nav-body">
            <div className="navbar">
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn"><i class="fa-solid fa-bars"></i></label>

                <a className="logo" href='/'>Greens</a>

                <ul>
                    <li>
                        <div className="navSearch">
                            <input type="search" onChange={ event => handleSearchClick(event.target.value)} placeholder="Search"/>
                            <button className="searchBtn">Search</button>
                        </div>
                        <div className="nav-search-result">
                            {data.map((value) => (
                                <>
                                    <a href={value}><i class="fa-brands fa-searchengin"></i> {value}</a>    
                                </>
                            ))}
                        </div>
                    </li>
                    <li><a className="button" href="/signup">Sign up</a></li>
                    <li><a className="button" href="/login">Log In</a></li>
                </ul>
            </div>
            </div>
        </>
    )
}