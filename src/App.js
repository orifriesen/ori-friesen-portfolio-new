import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import NavBar from './components/navbar';
import weblogo from "./assets/logo.png";
import backgroundImg from "./assets/nightsky/24.jpg";
import CodeSnippet from './components/codesnippet';
import Typed from 'typed.js';
import Experience from './components/myexperience';
import MyWork from './components/mywork';
import NightSky from './components/nightsky';
import RenderGallery from './components/render';
import { Link, animateScroll as scroll } from 'react-scroll';
import WorkTimeline from './components/timeline';
import { ContactUs } from './components/contactform';
import { ContactButtons } from './components/contactbuttons';

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: 670 });
  var normFont = isSmallScreen ? 8 : 17;

  const el = React.useRef(null);
  const elName = React.useRef(null);
  const el2 = React.useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust this value based on the section you want to trigger the color change
      const triggerSection = windowSize.current[0] / 2;

      setIsScrolled(scrollPosition > triggerSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onButtonClickResume = () => {
    const pdfUrl = "/ori-friesen-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ori-friesen-resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onButtonClickCV = () => {
      const pdfUrl = "/ori-friesen-cv.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "ori-friesen-cv.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hello,^500 I\'m'],
      typeSpeed: 75,
      loop: false,
      showCursor: false,
    });

    const typedName = new Typed(elName.current, {
      strings: [' Ori Friesen'],
      startDelay: 2500,
      typeSpeed: 75,
      loop: false,
      showCursor: false,
    });

    const subtyped = new Typed(el2.current, {
      strings: ['^1000I\'m a mathematician', '^200I\'m a cartographer', '^200I\'m a mobile app developer', '^200I\'m a web program developer', '^200I\'m a night sky photographer', '^200I\'m a CAD technician', '^200I\'m a 3d renderer', ''],
      startDelay: 2700,
      backDelay: 500,
      backSpeed: 75,
      typeSpeed: 75,
      loop: false,
      showCursor: false,
      smartBackspace: false
    });
  }, []);

  return (
    <div className="App" align="center" style={{overflow: "hidden", textTransform: "none", scrollBehavior: "smooth"}}>
      <div>
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-light; cls-inactive: uk-light; end: + *; offset: 0">
          <nav class="uk-navbar-container uk-navbar-transparent" style={{padding: 0, width: "100vw", position: "absolute"}}>
              <div class="uk-container" className={`your-element ${isScrolled ? 'scrolled' : ''}`} style={{paddingLeft: isSmallScreen ? 8 : 32, paddingRight: isSmallScreen ? 8 : 32, maxWidth: "100vw"}}>
                  <div uk-navbar style={{padding: 0}}>

                      <div class="uk-navbar-center" style={{justifyContent: "space-between", padding: "0"}}>
                          <Link activeClass="active" to="top" smooth={true} offset={-500} duration={500} class="uk-navbar-item uk-logo"><img src={weblogo} style={{width: isSmallScreen ? '30px' : '150px'}}/></Link>
                          <ul class="uk-navbar-nav">
                              <li><Link activeClass="active" to="aboutme" smooth={true} offset={-228} duration={500} style={{fontSize: normFont, textTransform: "capitalize"}}>about me</Link></li>
                              <li><Link activeClass="active" to="projects" smooth={true} duration={500} style={{fontSize: normFont, textTransform: "capitalize"}}>projects</Link></li>
                              <li><Link activeClass="active" to="galleries" smooth={true} offset={-128} duration={500} style={{fontSize: normFont, textTransform: "capitalize"}}>galleries</Link></li>
                              <li><Link activeClass="active" to="contactme" smooth={true} duration={500} style={{fontSize: normFont, textTransform: "capitalize"}}>contact me</Link></li>
                          </ul>
                      </div>

                  </div>
              </div>
          </nav>
        </div>

        <div class="uk-section-secondary uk-background-cover uk-flex" style={{backgroundImage: `url(${backgroundImg})`, height: "120vh", width: "100vw", position: "relative", zIndex: 0, display: "inline-block", justifyContent: "space-between"}}>
          <div>
            <div display="inline" name="top" style={{width: "100vw", marginTop: "40vh"}}>
              <h1 style={{display: "inline"}} class="uk-text-center uk-margin-auto uk-margin-auto-vertical" ref={el} />
              <h1 id="test-start-end" style={{display: "inline", marginLeft: 10, color: "#de1b85", width: "100vw", textAlign:"center"}} class="uk-text-center uk-margin-auto-vertical" ref={elName} />
            </div>
            <h4 class="uk-text-center uk-margin-auto uk-margin-auto-vertical" ref={el2} />
          </div>

          <div uk-parallax="target: #test-start-end; opacity: .5,0;">
            <div class="down-arrow"></div>
            <div style={{position: "absolute", top: "calc(100vh - 11vh)", left: "0", textAlign: "center", width: "100%"}}>scroll for more</div>
          </div>
        </div>
        
        <div name="aboutme" class="aboutme uk-section-secondary" style={{width: "100vw", backgroundColor: "#050409"}}>
          <div uk-parallax="target: #test-start-end; opacity: 1,1; y: 50vh, 0vh; scale: 1,1; start: -50vh;" style={{position: "relative", display: "inline-block", textAlign: "left", marginTop:"-20vh"}}>
            <h1 class="uk-text-center" style={{textAlign: "center", marginBottom: 32}}>About Me</h1>
            <CodeSnippet/>

            <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">
              <h2 class="uk-text-center" style={{textAlign: "center", paddingTop: 32, marginBottom: 32}}>Professional/Educational Timeline</h2>
              {/* <hr style={{borderWidth: 2}}/> */}
            </div>
          </div>
          <div class="uk-flex" style={{display:"inline-block"}}>
            {/* <Experience/> */}
            <div style={{marginBottom: 48}}>
                <div class="uk-center" align="center" style={{width: "100vw"}}>
                <div align="left" style={{display:"inline-block", width: isSmallScreen ? "80vw" : "70vw"}}>
                  <WorkTimeline/>
                </div>
            </div>
          </div>

          <h3 style={{marginTop: 64}} class="uk-text-center">Want to know more about me?</h3>

            <div class="uk-flex uk-flex-center" style={{width: "100%", marginTop: 16, marginBottom: 32}}>
              <a class="uk-button uk-button-default" onClick={onButtonClickResume} style={{fontSize: isSmallScreen ? "10px" : "16px", marginRight: 16}} uk-scrollspy="cls: uk-animation-slide-left; repeat: false"><span uk-icon="download" style={{margin: 4}}></span> Download my resume!</a>
              <a class="uk-button uk-button-default" onClick={onButtonClickCV} style={{fontSize: isSmallScreen ? "10px" : "16px", marginLeft: 16}} uk-scrollspy="cls: uk-animation-slide-right; repeat: false"><span uk-icon="download" style={{margin: 4}}></span> Download my CV!</a>
            </div>
          </div>
        </div>
        <div name="projects" style={{backgroundColor: "#0f1727"}}>
          <div class="uk-flex uk-section-secondary uk-text-center" style={{display:"inline-block", backgroundImage: "linear-gradient(180deg, #0f1727, #05040D , #05040D , #05040D , #05040D , #0f1727)", width: "100vw", borderRadius: 48}}>
            <h1 class="uk-text-center" style={{textAlign: "center", marginTop: 128}} uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">My Projects</h1>
            <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false" style={{fontSize: isSmallScreen ? "14px" : "16px", marginTop:"8px", marginBottom: "32px", width: "60vw", display: "inline-block"}} class="uk-text-center">
                Below are some of the projects that I have worked on from high school through college.
            </div>
            <MyWork/>
          </div>
        </div>

        <div name="galleries" class="uk-flex uk-section-secondary uk-text-center" style={{display:"inline-block", backgroundColor: "#0f1727", width: "100vw", backgroundImage: "linear-gradient(to top, #0f1727, #0f1727, #0f1727)"}}>
          <h1 class="uk-text-center" style={{textAlign: "center", marginTop: 0}} uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">Night Sky Photography</h1>
          <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false" style={{fontSize: isSmallScreen ? "14px" : "16px", marginTop:"8px", marginBottom: "32px", width: "60vw", display: "inline-block"}} class="uk-text-center">
          As part of an independent research project I took a part of during the Summer of 2020, I learned how to take night sky photographs. I fell in love with the process of it and ever since have done it as a hobby.
          Here you can see some of my best work as of now. All of these were taken using a digital single-lens reflex camera and were all edited in Adobe Lightroom and Photoshop. Keep an eye out because I intend to do even more night sky photography in the future!
          </div>
          <div style={{paddingLeft: 128, paddingRight: 128 , paddingTop: 8, paddingBottom: 16}} uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">
            <NightSky/>
          </div>
        </div>

        <div class="uk-flex uk-section-secondary uk-text-center" style={{display:"inline-block", backgroundColor: "#0f1727", width: "100vw"}}>
          <h1 class="uk-text-center" style={{textAlign: "center", marginTop: 180}} uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">3D Rendering</h1>
          <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false" style={{fontSize: isSmallScreen ? "14px" : "16px", marginTop:"8px", marginBottom: "32px", width: "60vw", display: "inline-block"}} class="uk-text-center">
          With my night sky photography, there is an aspect of focusing on the small details of an image that I love. 3D rendering takes this process to the extreme by focusing on small details such focusing on photorealistic textures, materials, and patterns.
          The following images are all made with KeyShot, a professional-level rendering software. From working with HDRIs to creating scratch imperfections and water textures, I hope to make the fake look real.
          </div>
          <div style={{paddingLeft: 128, paddingRight: 128 , paddingTop: 8, paddingBottom: 16}} uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">
            <RenderGallery/>
          </div>
        </div>

        <div class="uk-flex uk-flex-center uk-section-secondary uk-text-center" style={{display:"inline-block", backgroundImage: "linear-gradient(180deg, #0f1727, #05040D , #05040D , #05040D)", width: "100vw"}}>
          <h1 class="uk-text-center" name="contactme" style={{textAlign: "center", marginTop: 120}} uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">Contact Me</h1>
          <div style={{fontSize: isSmallScreen ? "14px" : "18px", marginTop:"8px", marginBottom: "32px", width: "60vw", display: "inline-block", marginTop: 16}}>Want to know more about what I am up to? Find me at any of the following places</div>
          <ContactButtons/>
          <div style={{fontSize: isSmallScreen ? "14px" : "18px", marginTop:"8px", marginBottom: "16px", width: "60vw", display: "inline-block", marginTop: 0}}>or send me a message below!</div>
          <ContactUs/>
        </div>
      </div>
    </div>
  );
}

export default App;
