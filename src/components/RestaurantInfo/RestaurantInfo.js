import { useParams } from "react-router-dom";
import { logo_CDN_URL } from "../../constants";
import { addItems } from "../../utils/cartSlice";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ShimmerUi from "../ShimmerUi/ShimmerUi";
import { useDispatch } from "react-redux";
import noFood from "../../assets/images/noFood.png";
// import "./Styles.css";

const RestaurantInfo = () => {
    const {resId} = useParams();
    const restaurantInfo = useRestaurantMenu(resId);
    const RestaurantInformation = restaurantInfo?.cards[0]?.card?.card?.info;
    const MenuCard = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.categories;
    const Values = Object.values(MenuCard);
    const dispatch = useDispatch();
    const addItem = (item) => {
        dispatch(addItems(item))
    }
    console.log('restaurantInfo', restaurantInfo);
    console.log('Values', Values);

    return  (!restaurantInfo) ? <ShimmerUi /> : (
        <div key={resId} className="menuInfo">
                <div className="flex flex-wrap gap-5">
                    <img className="m-8 w-1/4 h- h-1/4" src={logo_CDN_URL + RestaurantInformation.cloudinaryImageId}/>
                    <div>
                        <h1 className="mt-11 font-bold text-2xl">{RestaurantInformation.name}</h1>
                        <p className="mt-2 text-lg flex flex-wrap text-gray-500">
                            {RestaurantInformation.cuisines.length === 1 
                            ?
                            RestaurantInformation.cuisines : RestaurantInformation.cuisines.join(", ")}
                        </p>
                        
                        <p className="mt-2 text-lg flex flex-wrap text-gray-500">{RestaurantInformation.areaName}</p>
                        <div className="flex divide-x-2">
                            <div className="mt-2 p-4 gap-2">
                                <span className="flex flex-wrap gap-2 font-bold">
                                <svg className="mt-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>{RestaurantInformation.avgRating}</span>
                                <span className="text-s">Ratings</span>
                            </div>
                            <div className="mt-2 p-4 gap-2">
                                <span className="flex flex-wrap gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth="1.5" stroke="currentColor" className="mt-1 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-bold">{RestaurantInformation.sla?.slaString}</span>
                                </span>
                                <span className=" text-s"> Delivery Time</span>
                            </div>
                            <div className="mt-2 p-4 gap-2">
                                <span className="flex flex-wrap font-bold">{RestaurantInformation.costForTwoMessage}</span>
                                <span className=" text-s"> cost for 2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                   {Values && Values.itemCards && Values.itemCards.card &&(
                       <h1>{Values.itemCards.card.info}</h1>
                   )}
                </div>
                

                {/* <div className="ml-20 flex justify-center">
                    <div>
                        {MenuCard.map((item) => (
                            <div key={item.id} className="my-10 h-28 grid grid-cols-2">
                                    <span>
                                        <div className="mb-2 font-bold">{item.card.info.name}</div>
                                        <div className="mb-2 font-sans">₹ {item.card.info.price/100}/-
                                        </div>
                                        <div className="mb-2 text-gray-400 text-sm">{item.card.info.description}</div>
                                    </span>
                                     
                                    <span className="relative grid justify-items-start">
                                        {item.cloudinaryImageId === "" ? 
                                        <img className="w-40 h-24" src={noFood} /> 
                                        : 
                                        <img 
                                            className="w-40 h-24" 
                                            src={logo_CDN_URL + item.card.info.imageId}
                                        />}

                                        <button className="absolute text-base font-bold text-green-700 w-16 h-8 top-6 mt-14 ml-12 p-1 border border-gray-400 bg-white rounded" onClick={() => addItem(item)}>ADD</button> 
                                    </span>
                            </div>
                        ))}
                    </div>
                </div> */}
        </div>
    );
};

export default RestaurantInfo;