import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import songpongMain from "./../assets/mazegif.gif";

const MazeGenerator = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div class="uk-container" style={{marginTop: 16}}>

            <p style={{color: "lightgray", fontSize: 16}}>The Marvelous Maze Maker is a maze generator that uses backtracking to create a randomly generated maze. It first starts on a random cell in a grid and moves from there. The generator works by choosing an unvisited adjacent cell to break a wall to and then repeats from the new cell. If the chosen cell has no unvisited adjacent cells, the algorithm backtracks through all the previous cells until it finds one with unvisited adjacent cells and continues the process from there. It does this until all cells are visited and the maze is completed.</p>
            
            <div class="uk-text-center" style={{width: "100%", alignContent: "center"}}>
                <img src={songpongMain} style={{width: 400, margin: 16}}/>
            </div>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center", marginTop: 16}}>
                <h5 style={{color: "white", marginBottom: 8}}>Want to check it out? Download the project and run the executable file!</h5>
                <a href="https://github.com/orifriesen/mazeGenerator" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Source Code</div> <span uk-icon="link"></span></button></a>
            </div>
        </div>
    );
};

export default MazeGenerator;