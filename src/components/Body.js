import React, { useState } from "react"
import '../style/Resturant.css'
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import ShimmerCard from "./Shimmer";
import useResturantList from "../utils/useResturantList";
import useOnline from "../utils/useOnline";
import TicTacToe from "./TicTacToe";

const Body = () => {

    const { resList, filterResturant, updateFilterResturant } = useResturantList([]);
    const [searchTxt, setSearchTxt] = useState('');

    const isOnline = useOnline();
    if (!isOnline) {
        return <>
            <p> 🔴 Offline Please check ur internet connection </p>
            <TicTacToe/>
        </>

    }

    return filterResturant.length === 0 ?
        <>
            <ShimmerCard />
            <p>Search Item is Not Found</p>
        </> : (
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
                        updateFilterResturant(data);
                    }}>Search</button>
                </div>

                <div className="restaurant-container" >

                    {filterResturant.map((items) => (
                        <Link to={'/resturant/' + items.id} key={items.id}>
                            <div className="card">
                                <img src={items?.images[0]} alt="" />
                                <h3> {items?.title} </h3>
                                <h3>Price:${items?.price}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
}



export default Body;


