import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import map from "./../assets/developmentMap.gif";
import snax1 from "./../assets/snax1.png";
import snax2 from "./../assets/snax2.png";
import snax3 from "./../assets/snax3.png";

const Snax = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div class="uk-container" style={{marginTop: 16}}>
            <p style={{color: "lightgray", fontSize: 16, marginBottom: 32}}>Snax, the social snacking platform of the future, is a cross-platform mobile app that serves to provide a social media platform for the
            world of snacking. Made using Flutter in Visual Studio Code and Firebase, users of Snax are able to interact with other members of the snacking world to compare, share, and debate their
            snacking flamin' hot takes.</p>

            <div class="uk-grid" uk-grid style={{width: "100%"}}>
                <div class="uk-width-1-2" style={{justifyContent:"right", textAlign: "center"}}>
                    <img src={snax1} style={{margin: 16}}/>
                </div>
                <div class="uk-width-1-2">
                    <div style={{color: "lightgray", fontSize: 18, marginTop: 16, fontWeight: "bold"}}>Browse Snacks</div>
                    <p style={{color: "lightgray", fontSize: 16, marginTop: 0}}>The home page features a multitude of snacks and categories for the user to browse through. Users can switch between the three tabs on top where they will see their For You tab, the Trending tab, and the
                    Top tab. The home page also shows the Snack of the Week and other featured and curated lists.</p>
                </div>
            </div>

            <div class="uk-grid" uk-grid style={{width: "100%"}}>
                <div class="uk-width-1-2">
                    <div style={{color: "lightgray", fontSize: 18, marginTop: 16, fontWeight: "bold"}}>Review snacks</div>
                    <p style={{color: "lightgray", fontSize: 16, marginTop: 0}}>When a user selects a snack, they will see the different categories that users have rated the snack and will be given the option to rate the snack itself. Additionally,
                    each snack has a forum attached where users can share their flamin' hot takes.</p>
                </div>
                <div class="uk-width-1-2" style={{justifyContent:"right", textAlign: "center"}}>
                    <img src={snax2} style={{margin: 16}}/>
                </div>
            </div>

            <div class="uk-grid" uk-grid style={{width: "100%"}}>
                <div class="uk-width-1-2" style={{justifyContent:"right", textAlign: "center"}}>
                    <img src={snax3} style={{margin: 16}}/>
                </div>
                <div class="uk-width-1-2">
                    <div style={{color: "lightgray", fontSize: 18, marginTop: 16, fontWeight: "bold"}}>View Your Friends' Opinions</div>
                    <p style={{color: "lightgray", fontSize: 16, marginTop: 0}}>Under the Feed Tab, users are able to view the activity of other Snax users. By sorting the feed by trending, top, and friends, users can view what is going on in the Snax world.
                    Users are able to post messages and pictures to share with others. Others can interact with your post by liking or commenting.</p>
                </div>
            </div>

            <div class="uk-text-center" style={{width: "100%", alignContent: "center", marginTop: 16}}>
                <h5 style={{color: "white", marginBottom: 8}}>Want to check it out?</h5>
                <a href="https://linktr.ee/snaxapp" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Project</div> <span uk-icon="link"></span></button></a>
                <a href="https://github.com/orifriesen/snax" target="_blank"><button class="submitForm"><div style={{marginLeft: 8, display: "inline-block"}}>View Source Code</div> <span uk-icon="link"></span></button></a>
            </div>
        </div>
    );
};

export default Snax;