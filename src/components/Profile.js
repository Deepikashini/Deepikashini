// Class Based Component
import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props) ;
        
        console.log("Child - Constructor")
        // Create State variable
        this.state = {
            userInfo: {
                login: "Dummy Name",
                avatar_url: "Dummy Avatar"
            }
        }

    }

    componentDidMount() {
        console.log("Child - ComponentDidMount");
        // const data = await fetch("https://api.github.com/users/Deepikashini");
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo: json
        // })
        this.timer = setInterval(() => {
            console.log("This is profile page");
        }, 1000);
       
    }

    

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Component will unmount");
    }
    
    render() {
        console.log("Child - Render")
        return  (
            <>
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name: {this.state.userInfo.login}</h2>                
            </>
        );
    };
}

export default Profile;

/**
 * Parent Constructor
 * Parent Render
 * Child Constructor
 * Child Render
 * 
 * 
 * Child console
 * Child ComponentDidMount
 * Parent ComponentDidMount
 * 
 */