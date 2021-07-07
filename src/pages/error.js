import React from "react";
const ErrorPage = (props) => {
const type = props.error.status === 404 ? "Not Found" : "Internal Server Error";
    return <>{type}</>;
};
export default Error;
