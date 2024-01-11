import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import songpongMain from "./../assets/songpongMain.gif";
import songpong2 from "./../assets/songpong2.gif";

const SongPong = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div class="uk-container" style={{marginTop: 16}}>

            <p style={{color: "lightgray", fontSize: 16}}>Song Pong is an interactive musical sandbox experience that seeks to merge physics simulators and music sequencers to make
            creating music a more interactive and visual experience. By utilizing Pong-like physics (colliding balls with lines), users are able to create music based on the kind of line drawn and
            the velocity of the ball when it collides with a line. This project was developed in Unity as a part of my computer science course on software design and development.</p>
            
            <div class="uk-text-center" style={{width: "100%", alignContent: "center"}}>
                <img src={songpongMain} style={{width: 600, margin: 16}}/>
            </div>

            <p style={{color: "lightgray", fontSize: 16}}>The way users make different sounds and notes with the lines is by selecting which instrument they want in the bottom left. Each color correlates with a different instrument (piano, guitar, bass, and drums) and the hue of the color represents the register of the sounds created.
            Thus, lighter colors are going to be higher pitched and darker colors are going to be lower pitched. By left-clicking and dragging, the user can draw a line. Right-clicking on a line deletes it. Users can also create new ball spawners
            by pressing "B". The top right also features global settings such as changing the gravity and luminance of the lines.</p>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center"}}>
                <img src={songpong2} style={{width: 600, margin: 16}}/>
            </div>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center", marginTop: 16}}>
                <h5 style={{color: "white", marginBottom: 8}}>Want to check it out?</h5>
                <a href="https://song-pong.github.io/" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Project</div> <span uk-icon="link"></span></button></a>
                <a href="https://github.com/orifriesen/c_flat" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Source Code</div> <span uk-icon="link"></span></button></a>
            </div>
        </div>
    );
};

export default SongPong;