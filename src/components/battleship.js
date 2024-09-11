import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import songpongMain from "./../assets/mazegif.gif";

const Battleship = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div class="uk-container" style={{marginTop: 16}}>

            <p style={{color: "lightgray", fontSize: 16}}>More info will be available soon!</p>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center", marginTop: 16}}>
                <h5 style={{color: "white", marginBottom: 8}}>This project is still a work in progress but the source code is available!</h5>
                <a href="https://github.com/orifriesen/mazeGenerator" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Source Code</div> <span uk-icon="link"></span></button></a>
            </div>
        </div>
    );
};

export default Battleship;