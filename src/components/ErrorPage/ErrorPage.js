import React from "react";
import "./errorpage.css";
export default function ErrorPage() {
    return (
        <div className="flex">
            <img
                id="loop"
                src={
                    "https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
                }
                alt="test"
            />

            <div className="msg">
                <p>Uh oh!</p>

                <p id="medium">Looks Like You got lost.</p>

                
                <p id="small">
                    The page you are looking for does not exist. How you got
                    here is a mystery. Please go back to the homepage.
                </p>
            </div>
        </div>
    );
}
