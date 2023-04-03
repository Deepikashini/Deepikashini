
import React from "react";
import Profile from "./Profile";

class About extends React.Component {
    constructor(props){
        super(props); {
            // console.log("Parent - Constructor");
        }
    }
    
    componentDidMount(){
        // console.log("Parent - Component Did Mount");
    }

    render() {
        // console.log("Parent - Render");
        return (
            <>
                <h1>Welcome to About us</h1>
                
                <Profile name={"First Child"} />
            </>
        );
    }
}

export default About;
