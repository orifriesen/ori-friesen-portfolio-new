import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import emailIcon from './../assets/icons/email.png';
import linkedin from './../assets/icons/linkedin.png';
import github from './../assets/icons/github.png';
import grabcad from './../assets/icons/grabcad.png';
import spotify from './../assets/icons/spotify.png';
import instagram from './../assets/icons/instagram.png';
import soundcloud from './../assets/icons/soundcloud.png';
import goodreads from './../assets/icons/goodreads.png';

export const ContactButtons = () => {
  const form = useRef();
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    const handleOpenEmail = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'mailto:orifriesen@gmail.com';
    
        window.location.href = mailtoLink;
    };

    const handleOpenLinkedin = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'https://www.linkedin.com/in/ori-friesen-4b10a71b6/';
    
        window.open(mailtoLink, '_blank')
    };

    const handleOpenGithub = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'https://github.com/orifriesen';
    
        window.open(mailtoLink, '_blank')
    };

    const handleOpenGrabcad = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'https://grabcad.com/ori.friesen-1';
    
        window.open(mailtoLink, '_blank')
    };
    const handleOpenSpotify = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'https://open.spotify.com/user/21zpsed3jl66wzayjmhnvgt7a';
    
        window.open(mailtoLink, '_blank')
    };
    const handleOpenInstagram = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'https://www.instagram.com/orifriesen/';
    
        window.open(mailtoLink, '_blank')
    };
    const handleOpenSoundcloud = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'https://soundcloud.com/djftpix';
    
        window.open(mailtoLink, '_blank')
    };
    const handleOpenGoodreads = () => {
        // Replace 'to', 'subject', and 'body' with your desired email details
        const mailtoLink = 'https://www.goodreads.com/user/show/159638925-ori-friesen';
    
        window.open(mailtoLink, '_blank')
    };

  return (
    <div style={{paddingBottom: 32}} uk-scrollspy="cls: uk-animation-slide-bottom; target: .socialButton; delay: 100; repeat: false">
        <div class="socialButton one" onClick={handleOpenEmail}>
            <div class="buttonInner">
                <img src={emailIcon} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>Email</span>
            </div>
        </div>
        <div class="socialButton two" onClick={handleOpenLinkedin}>
            <div class="buttonInner">
                <img src={linkedin} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>LinkedIn</span>
            </div>
        </div>
        <div class="socialButton three" onClick={handleOpenGithub}>
            <div class="buttonInner">
                <img src={github} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>GitHub</span>
            </div>
        </div>
        <div class="socialButton four" onClick={handleOpenGrabcad}>
            <div class="buttonInner">
                <img src={grabcad} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>GrabCAD</span>
            </div>
        </div>
        <br/>
        <div class="socialButton five" onClick={handleOpenSpotify}>
            <div class="buttonInner">
                <img src={spotify} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>Spotify</span>
            </div>
        </div>
        <div class="socialButton six" onClick={handleOpenInstagram}>
            <div class="buttonInner">
                <img src={instagram} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>Instagram</span>
            </div>
        </div>
        <div class="socialButton seven" onClick={handleOpenSoundcloud}>
            <div class="buttonInner">
                <img src={soundcloud} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>SoundCloud</span>
            </div>
        </div>
        <div class="socialButton eight" onClick={handleOpenGoodreads}>
            <div class="buttonInner">
                <img src={goodreads} style={{height:32, filter: "brightness(0) invert(1)"}}/>
                <span style={{fontSize: 16, marginLeft: 16}}>Goodreads</span>
            </div>
        </div>
        {/*
        <div class="socialButton six" onclick="window.open('https://www.instagram.com/orifriesen/','mywindow');">
            <div style="margin-top:-12px">
                <img src="~@/assets/icons/instagram.png" style="height:32px; filter: brightness(0) invert(1);"/>
                <span>Instagram</span>
            </div>
        </div>
        <div class="socialButton seven" onclick="window.open('https://soundcloud.com/djftpix','mywindow');">
            <div style="margin-top:-12px">
                <img src="~@/assets/icons/soundcloud.png" style="height:26px; filter: brightness(0) invert(1);"/>
                <span>SoundCloud</span>
            </div>
        </div>
        <div class="socialButton eight" onclick="window.open('https://www.goodreads.com/user/show/159638925-ori-friesen','mywindow');">
            <div style="margin-top:-12px">
                <img src="~@/assets/icons/goodreads.png" style="height:36px; filter: brightness(0) invert(1);"/>
                <span>Goodreads</span>
            </div>
        </div> */}
    </div>
  );
};