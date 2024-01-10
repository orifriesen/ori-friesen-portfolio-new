import React from 'react';
import { useMediaQuery } from 'react-responsive';
import dataviz from "./../assets/greenline.jpg";
import snax from "./../assets/snaxbackground.png";
import songpong from "./../assets/songpong.png";
import battleship from "./../assets/battleshipbackground.png";
import maze from "./../assets/mazebackground.png";
import sudoku from "./../assets/sudokubackground.png";
import markov from "./../assets/markov.png";
import tda from "./../assets/tda.png";

const MyWork = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div class="uk-container" style={{marginBottom: 188}}>
            <div class="uk-child-width-1-3@m" data-uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card-large; delay: 200; repeat: false">
            <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-tda" style={{backgroundImage: `url(${tda})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(2px) brightness(100%)"}}>
                            <h3 class="uk-card-title">The Shape of United States Segregation</h3>
                            
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>Using Persistent Homology to Study the Shape of Racial Segregation in United States Cities</p>
                                <div class="uk-card-badge uk-label" style={{backgroundColor: "#98FB98c0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Math</div>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-tda" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>The Shape of United States Segregation</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>Using Persistent Homology to Study the Shape of Racial Segregation in United States Cities</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>March 2023 - Present</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Python</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>ArcGIS</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>scikit-tda</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Topological Data Analysis</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Computational Mathematics</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Math Research</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-development" style={{backgroundImage: `url(${dataviz})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(2px) brightness(100%)"}}>
                            <h3 class="uk-card-title">Development or Displacement?</h3>
                            
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>Exploring Factors of Gentrification and Demographic Changes in Saint Paul, Minnesota</p>
                                <div class="uk-card-badge uk-label" style={{backgroundColor: "#AFEEEEc0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Comp Sci</div>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-development" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>Development or Displacement?</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>Exploring Factors of Gentrification and Demographic Changes in Saint Paul, Minnesota</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>September 2023 - December 2023</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>JavaScript</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>ReactJS</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>D3.js</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Python</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Data Visualization</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Data Cleaning</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-markov" style={{backgroundImage: `url(${markov})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(2px) brightness(100%)"}}>
                            <h3 class="uk-card-title">Predicting Future Minnesota Inter-Regional Migration</h3>
                            
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>Using Markov Chains to Understand Inter-Regional Migration in Minnesota</p>
                                <div class="uk-card-badge uk-label" style={{backgroundColor: "#98FB98c0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Math</div>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-markov" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>Predicting Future Minnesota Inter-Regional Migration</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>Using Markov Chains to Understand Inter-Regional Migration in Minnesota</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>November 2022 - December 2022</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>R/RStudio</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>LaTeX</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>ArcGIS</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Markov Chains</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Network Science</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-snax" style={{backgroundImage: `url(${snax})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(1px) brightness(80%)"}}>
                            <h3 class="uk-card-title">SNAX</h3>
                            <div class="uk-card-badge uk-label" style={{backgroundColor: "#AFEEEEc0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Comp Sci</div>
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>The Social Snacking Platform of the Future</p>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-snax" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>SNAX</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>The Social Snacking Platform of the Future</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>September 2020 - September 2021</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Flutter/Dart</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Firebase</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Sketch</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>App Development</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>UI/UX</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-songpong" style={{backgroundImage: `url(${songpong})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(2px) brightness(100%)"}}>
                            <h3 class="uk-card-title">Song Pong</h3>
                            <div class="uk-card-badge uk-label" style={{backgroundColor: "#AFEEEEc0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Comp Sci</div>
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>An Interactive Musical Sandbox Experience</p>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-songpong" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>Song Pong</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>An Interactive Musical Sandbox Experience</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>September 2022 - December 2022</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Unity</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>C#</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Game Development</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Project Management</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-battleship" style={{backgroundImage: `url(${battleship})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(1px) brightness(100%)"}}>
                            <h3 class="uk-card-title">Battleship Better</h3>
                            <div class="uk-card-badge uk-label" style={{backgroundColor: "#AFEEEEc0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Comp Sci</div>
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>An Interactive Battleship Algorithm to Play Battleship Better</p>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-battleship" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>Battleship Better</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>An Interactive Battleship Algorithm to Play Battleship Better</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>March 2021 - Present</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>ReactJS</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Python</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>JavaScript</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Algorithm Design</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>UI/UX</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-maze" style={{backgroundImage: `url(${maze})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(1px) brightness(100%)"}}>
                            <h3 class="uk-card-title">Marvelous Maze Maker</h3>
                            <div class="uk-card-badge uk-label" style={{backgroundColor: "#AFEEEEc0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Comp Sci</div>
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>The Recursive Wall-Breaking Maze Generator</p>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-maze" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>Marvelous Maze Maker</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>The Recursive Wall-Breaking Maze Generator</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>April 2019 - May 2019</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>C++</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>SFML</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Algorithm Design</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card-large" data-uk-toggle="target: #modal-sudoku" style={{backgroundImage: `url(${sudoku})`, borderRadius: 9, backgroundSize: "cover", padding: 0}}>
                        <div class="uk-card-secondary uk-card-body" style={{textAlign: "left", paddingLeft: 32, paddingTop: 32, height: 300, backdropFilter: "blur(2px) brightness(100%)"}}>
                            <h3 class="uk-card-title">Supreme Sudoku Solver</h3>
                            <div class="uk-card-badge uk-label" style={{backgroundColor: "#AFEEEEc0", color: "#050409d0", fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1, paddingLeft: 8, marginTop: -16, marginRight: -16}}>Comp Sci</div>
                            <div class="uk-grid" style={{justifyContent: "space-between", height: 250}}>
                                <p style={{display: "inline-block"}}>The Supreme Backtracking Sudoku Algorithm</p>
                                <p class="hover-text" style={{position: "absolute", paddingRight: 32, fontSize: 16, marginBottom: -16}}>Read more <span class="uk-margin-small-right" style={{marginTop: -4, marginLeft: -2}} uk-icon="chevron-right"></span></p>
                            </div>
                        </div>
                    </div>
                    <div id="modal-sudoku" class="uk-modal-container" data-uk-modal>
                            <div className="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close-default" type="button" uk-close uk-icon="close"></button>
                                <h2 className="uk-modal-title" style={{color: "#de1b85", marginBottom: 0}}>Supreme Sudoku Solver</h2>
                                <h3 style={{marginTop: 0, marginBottom: 0, color: "whitesmoke"}}>The Supreme Backtracking Sudoku Algorithm</h3>
                                <h4 style={{marginTop: 0, marginBottom: 8, color: "gray"}}>April 2018 - May 2018</h4>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>C++</span>
                                <span class="uk-label" style={{backgroundColor: "PaleTurquoise", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>SFML</span>
                                <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Algorithm Design</span>
                                <p style={{color: "lightgray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWork;