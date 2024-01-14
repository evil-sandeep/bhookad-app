import React, { useState } from "react";
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
        return (
            <>
                <p className="text-red-500">🔴 Offline. Please check your internet connection.</p>
                <TicTacToe />
            </>
        );
    }

    return filterResturant.length === 0 ? (
        <>
            <ShimmerCard />
            <p className="text-green-600">Search Item is Not Found</p>
        </>
    ) : (
        <>
            <div className="search-container text-black-600 p-1 ml-2 mt-2">
                <input
                    type="text"
                    className="search-input border p-2 rounded-md h-8 focus:bg-green-50 m-2"
                    placeholder="Search..."
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }}
                />
                <button
                    className="search-btn bg-green-500 text-white h-8 ml-2 w-20 rounded-md hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-0 focus:ring-green-300 "
                    onClick={() => {
                        const data = filterData(resList, searchTxt);
                        updateFilterResturant(data);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="restaurant-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
                {filterResturant.map((items) => (
                    <Link to={'/resturant/' + items.id} key={items.id}>
                        <div className="card bg-white p-4 shadow-lg  transition-transform transform hover:scale-105">
                            <img src={items?.images[0]} alt="" className="w-full h-48 object-cover mb-2" />
                            <h3 className="text-lg font-semibold">{items?.title}</h3>
                            <h3 className="text-green-600">Price: ${items?.price}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Body;