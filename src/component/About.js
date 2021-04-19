import React from "react";
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Next you just have to make sure you link the files properly in your webpage.
            Generally it is wise to import javascript files at the end of the body to reduce page load time.
            Follow the example below on how to import Materialize into your webpage.
            </p>
        </div>
    )
}

export default Rainbow(About);