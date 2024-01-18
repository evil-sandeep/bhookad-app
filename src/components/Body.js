import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import ShimmerCard from "./Shimmer";
import useResturantList from "../utils/useResturantList";
import useOnline from "../utils/useOnline";
import TicTacToe from "./TicTacToe";
// import UserContext from "../utils/userContext";

const Body = () => {
    const { resList, filterResturant, updateFilterResturant } = useResturantList([]);
    const [searchTxt, setSearchTxt] = useState('');
    // const {user,setUpdateUser}=useContext(UserContext)


    const isOnline = useOnline();
    if (!isOnline) {
        return (
            <>
                <p className="text-red-500 text-xl mt-3  animate-pulse">🔴 Offline. Please check your internet connection.</p>

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
                data-testid='search-input'
                    type="text"
                    className="search-input border p-2 rounded-md h-8 focus:bg-green-50 m-2"
                    placeholder="Search..."
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }}
                />
                <button
                    data-testid='search-btn'
                    className="search-btn bg-green-500 text-white h-8 ml-2 w-20 rounded-md hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-0 focus:ring-green-300 "
                    onClick={() => {
                        const data = filterData(resList, searchTxt);
                        updateFilterResturant(data);
                    }}
                >
                    Search
                </button>

                {/* <input className="border border-blue-600 cursor-pointer"  value={user.name} onChange={
                    e=>{setUpdateUser({
                        name:e.target.value,
                        email:"newemal@.com"
                    })
                }
                 } /> */}
            </div>

            <div data-testid="res-list"  className="restaurant-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
                {filterResturant.slice(5).map((items) => (
                    <Link to={'/resturant/' + items.id} key={items.id}>
                        <div className="card bg-white p-4 shadow-lg transition-transform transform hover:opacity-75 hover:scale-105">
                            <img src={items?.images[1]} alt="" className="w-full h-48 object-cover mb-2" />
                            <h3 className="text-lg font-semibold">{items?.title}</h3>
                            <h3 className="text-green-600">Price: ₹{items?.price*64}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Body;
