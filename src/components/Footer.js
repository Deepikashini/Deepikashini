import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <>
            <h1 className="text-3xl font-bold">Footer</h1>
            {/* <h3 className="text-xl font-medium">Created by {user.name} - {user.email}</h3> */}
        </>
    )
}

export default Footer;