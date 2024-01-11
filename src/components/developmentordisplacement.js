import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import map from "./../assets/developmentMap.gif";
import chart from "./../assets/developmentChart.gif";

const DevelopmentOrDisplacement = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div class="uk-container" style={{marginTop: 16}}>
            
            <div class="uk-text-center" style={{width: "100%", alignContent: "center"}}>
                <img src={map} style={{width: 600, margin: 16}}/>
            </div>

            <p style={{color: "lightgray", fontSize: 16}}>As part of my computer science capstone course I took in the Fall semester of 2023, I created this website where users can explore different aspects
            of gentrification in Saint Paul, Minnesota, through this interactive dashboard, linked <a href="https://orifriesen.github.io/comp-435-final-project/" target="_blank" style={{color: "PaleTurquoise"}}>here</a>. While
            the structure of the website was made with React JS and UIKit, the main focus is the data vizualization that is implemented with D3.js.</p>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center"}}>
                <img src={chart} style={{width: 600, margin: 16}}/>
            </div>

            <p style={{color: "lightgray", fontSize: 16}}>By using data from the US Census Bureau's American Community Survey, I was able to implement a multitude of charts and graphs that visualize
            estimated yearly data for many different indicators of displacement and gentrification such as change in population per race, median rent, income spent on rent, median household value, median income,
            population with public assistance, and Gini Index.</p>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center", marginTop: 16}}>
                <h5 style={{color: "white", marginBottom: 8}}>Want to check it out?</h5>
                <a href="https://orifriesen.github.io/comp-435-final-project/" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Project</div> <span uk-icon="link"></span></button></a>
                <a href="https://github.com/orifriesen/comp-435-final-project" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Source Code</div> <span uk-icon="link"></span></button></a>
            </div>
        </div>
    );
};

export default DevelopmentOrDisplacement;