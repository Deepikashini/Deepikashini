import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("This is Contact Page");
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
            <h1>Contact Us</h1>
    );
};

export default Contact;