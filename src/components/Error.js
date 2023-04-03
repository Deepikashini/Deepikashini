import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    const {status, statusText, data} = error;

    return (
        <>
            <h1>{status} {statusText}</h1>
            <h3>{data}</h3>
        </>
    )
};

export default Error;