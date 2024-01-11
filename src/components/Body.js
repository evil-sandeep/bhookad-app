import React, { useEffect, useState } from "react"
import { API_URL } from "../config";
import '../style/Resturant.css'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (restaurants, searchText) => {
    return restaurants.filter((restaurant) =>
        restaurant.title.toLowerCase().includes(searchText.toLowerCase())
    );
}

const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');
    const [filterResturant, setFilterResturant] = useState([])

    useEffect(() => {
        ResturaltList()
    }, []);

    const ResturaltList = async () => {
        const data = await fetch(API_URL)
        const json = await data.json();
        setResList(json.products)
        setFilterResturant(json.products)
    }

    return filterResturant.length ===0 ? (<Shimmer/>): (
        <>
            <div className="search-container">
                <input type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchTxt}
                    onChange={(e) => { setSearchTxt(e.target.value) }}
                />

                <button className="search-btn" onClick={() => {
                    const data = filterData(resList, searchTxt)
                    setFilterResturant(data);
                }}>Search</button>
            </div>

            <div className="restaurant-container" >

                {filterResturant.map((items) => (
                    <>
                    <Link to={'/resturant/'+items.id} key={items.id}>
                    <div key={items.id} className="card">
                        <img src={items?.images[0]} alt="" />
                        <h3> Name:{items?.title} </h3>
                        {/* <h3>Price:{items?.price}</h3>
                        <h4>Rating: {items?.rating}</h4> */}
                    </div>
                    </Link>
                    </>
                ))}
            </div>
        </>
    )
}



export default Body;


