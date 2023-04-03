import ShimmerUi from "../components/ShimmerUi/ShimmerUi";
import RestaruantCard from "./Restaruant_Cards";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useStatus from "../utils/useStatus";
import 'font-awesome/css/font-awesome.min.css';


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // useEffect with out dependency will call only once 
    useEffect(() => {
        // API call
        getRestaurant();
    },[]);

    // console.log("rendered")

    //https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&page_type=DESKTOP_WEB_LISTING
    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=328722&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        // for the first time making both AllRestaurants and filteredRestaurants to get populated from the API call (Used optional Chaining)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    }

    const status = useStatus();

    if(!status){
        return <h1>Offline! Please Check Your Internet Connection</h1>
    }

    // Early return (not render component)
    // if(!allRestaurants) return null;
    
    return (filteredrestaurants?.length === 0) ? (
        <ShimmerUi />
        ) : (
        <>
            {/* <div className="search-container">
                <div className="search">
                    <input 
                    className="search-box"
                    type="text" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e) =>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-icon">
                    <i className="fa fa-search icon" aria-hidden="true" onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}></i>
                    </button>
                </div>
            </div> */}

            <span className="w-screen md:w-1/3 h-10 my-7 ml-[460px] bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
                <input type="search" name="serch" placeholder="Search"
                className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
                value={searchText}
                    onChange={(e) =>{
                        setSearchText(e.target.value);
                    }} />
                    <i className="fa fa-search icon m-3 mr-5 text-lg text-gray-700 w-4 h-4" aria-hidden="true" onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}>
                    </i>
            </span>
        
            <div className="restaurant-cards ml-12 flex flex-wrap flex-row gap-y-10">
                {
                    filteredrestaurants.map((restaruant) => {
                          
                        return (
                            <Link 
                                to={"/restaurant/" + restaruant.data.id}
                                key={restaruant.data.id}
                            >
                                <RestaruantCard {...restaruant.data}/>
                            </Link>
                            
                        );
                    })
                }        
                
            </div>
        </>  
    );
};

export default Body;