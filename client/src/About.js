import React from "react";
import ReactPlayer from "react-player";
import './About.css';

function About(){

    return(
        <div className="about">
            <div className="about-summary">
                <h2>
                    A convenient way to access and use communication visuals for special education staff who work with students on the autism spectrum. Click on a communication visual to add it to your First/Then Board or Token Reinforcement Board. Create the communication visuals that you need and delete the ones you don't need.
                </h2>
            </div>
            <div className="about-demo">
                <ReactPlayer controls url="https://youtu.be/o7zeHodL8zk"/>
            </div>
        </div>
    )
}

export default About;