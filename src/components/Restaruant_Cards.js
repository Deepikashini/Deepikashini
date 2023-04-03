import { logo_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const RestaruantCard = ({cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString
}) => {
    const {resId} = useParams();
    // const { user } = useContext(UserContext);
    return (
        
        <div key={resId} className="card w-72 h-full p-2 m-3 hover:border border-gray-300 hover:shadow-lg">
            <img className="w-full" src={logo_CDN_URL + cloudinaryImageId}/>
            <h2 className="ml-1 font-bold">{name}</h2>
            <p className="ml-1 text-xs flex flex-wrap text-gray-500">{cuisines.join(", ")}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
                <div className="ml-1 mt-1 text-sm">
                    <span className="flex flex-wrap gap-2">
                    <svg className="mt-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>{avgRating}</span>
                </div>
                <div>•</div>
                <div className="mt-1 text-sm">{slaString}</div>
                <div>•</div>
                <div className="mt-1 text-sm">{costForTwoString}</div>
                {/* <div>{user.name} - {user.email}</div> */}
            </div>
        </div>
    );
};

export default RestaruantCard;