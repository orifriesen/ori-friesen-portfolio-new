import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import songpongMain from "./../assets/sudokusolver1.gif";
import songpong2 from "./../assets/sudokusolver2.gif";

const SudokuSolver = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div class="uk-container" style={{marginTop: 16}}>

            <p style={{color: "lightgray", fontSize: 16}}>The Supreme Sudoku Solver was the first computer science I have ever made. I made it during my freshman year of high school as my final project for 
            my Computer Science 3-4 class. While the project is fairly simple and the code is not optimally structured, this project was the start of my programming journey and I have come a long way since I made it,
            but I like to keep it here as a reminder of my humble beginnings in the world of programming.</p>
            
            <div class="uk-text-center" style={{width: "100%", alignContent: "center"}}>
                <img src={songpongMain} style={{width: 400, margin: 16}}/>
                <img src={songpong2} style={{width: 400, margin: 16}}/>
            </div>

            <p style={{color: "lightgray", fontSize: 16}}>By clicking on a cell and typing in a number, the user of this program is able to input the values of the sudoku puzzle they are trying to solve. Once the user is satisfied with their inputs,
            they can click the solve button to get a solution to their puzzle. The program utilizes a backtracking brute-force algorithm that goes through all the possibilities and recurses until a solution is found.</p>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center", marginTop: 16}}>
                <h5 style={{color: "white", marginBottom: 8}}>Want to check it out? Download the project and run the executable file!</h5>
                <a href="https://github.com/orifriesen/supreme-sudoku-solver" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Source Code</div> <span uk-icon="link"></span></button></a>
            </div>
        </div>
    );
};

export default SudokuSolver;