import hljs from 'highlight.js/lib/core';
import "highlight.js/styles/base16/harmonic16-dark.css";
import javascript from 'highlight.js/lib/languages/javascript';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

const CodeSnippet = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });
    var normFont = isSmallScreen ? 6 : 14;

    useEffect(() => {
        // Trigger highlight.js to highlight code blocks
        hljs.highlightAll();
    }, []);

    return (
        <div style={{fontSize: normFont, background: "#3b3d40", borderRadius: 8, boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <span class="dot" style={{marginLeft: 16, background: "#FF605C"}}></span>
            <span class="dot" style={{background: "#FFBD44"}}></span>
            <span class="dot" style={{background: "#00CA4E"}}></span>
            <pre style={{justifyContent: "space-around", background: "#3b3d40", border: "none", margin: 8, marginTop: 0, borderRadius: 8}}>
                <code className="javascript" style={{fontSize: normFont, justifyContent: "space-around", background: "#3b3d40"}}>
                    {isSmallScreen ? `/* Hello! I'm Ori Friesen. I'm a designer, inventor, developer, and night sky photographer.
Every project I’ve taken on was guided by my curiosity, creativity, and diligence. I use
this space to showcase my current and past work, to detail upcoming plans, and to make my
presence felt in the world. Here I present my many projects from my night sky photographs
to my engineering projects to showcasing a gallery of all my best computer-generated renders.
I’m constantly changing and evolving, so what you see here today might not be here tomorrow! */

class Ori {
    constructor() {
        this.origin = 
            "Portland, OR"
        this.education = 
            "Macalester College"
        this.academicSpecialties = 
            ["mathematics", "geography", "computer science"]
        this.expectedGraduation = 
            "May 2025"
        this.interests = 
            ["topology", "graph theory", "urban planning", "app development",
            "algorithm development", "mechanical engineering", "night sky photography",
            "3d rendering", "music production", "labradoodles"]
        this.languageExperience = 
            {"C++" : "6 years", "C#" : "3 years", "Java" : "6 years", "Flutter/Dart" : "1 year",
            "Python" : "4 years", "React.js" : "2 years", "javaScript" : "2 years",
            "HTML" : "2 years", "CSS" : "2 years", "D3.js" : "1 year", "LaTeX" : "7 years",
            "R" : "3 years"}
        this.skills = 
            {"Android Studio" : "4 years", "Autodesk Fusion 360" : "4 years",
            "Autodesk Inventor" : "4 years", "SolidWorks" : "3 years",
            "OnShape" : "3 years", "3D-Printing" : "6 years",
            "Adobe XD" : "3 years", "Adobe Photoshop" : "1 year", "Adobe Lightroom" : "3 years",
            "Unity" : "2 years", "ArcGIS Pro" : "3 years"}
    }
};` : `/* Hello! I'm Ori Friesen. I'm a designer, inventor, developer, and night sky photographer.
Every project I’ve taken on was guided by my curiosity, creativity, and diligence. I use
this space to showcase my current and past work, to detail upcoming plans, and to make my
presence felt in the world. Here I present my many projects from my night sky photographs
to my engineering projects to showcasing a gallery of all my best computer-generated renders.
I’m constantly changing and evolving, so what you see here today might not be here tomorrow! */

class Ori {
    constructor() {
        this.origin = 
            "Portland, OR"
        this.education = 
            "Macalester College"
        this.academicSpecialties = 
            ["mathematics", "geography", "computer science"]
        this.expectedGraduation = 
            "May 2025"
        this.interests = 
            ["topology", "graph theory", "urban planning", "app development",
            "algorithm development", "mechanical engineering", "night sky photography",
            "3d rendering", "music production", "labradoodles"]
        this.languageExperience = 
            {"C++" : "6 years", "C#" : "3 years", "Java" : "6 years", "Flutter/Dart" : "1 year",
            "Python" : "4 years", "React.js" : "2 years", "javaScript" : "2 years",
            "HTML" : "2 years", "CSS" : "2 years", "D3.js" : "1 year", "LaTeX" : "7 years",
            "R" : "3 years"}
        this.skills = 
            {"Android Studio" : "4 years", "Autodesk Fusion 360" : "4 years",
            "Autodesk Inventor" : "4 years", "SolidWorks" : "3 years",
            "OnShape" : "3 years", "3D-Printing" : "6 years",
            "Adobe XD" : "3 years", "Adobe Photoshop" : "1 year", "Adobe Lightroom" : "3 years",
            "Unity" : "2 years", "ArcGIS Pro" : "3 years"}
    }
};`}
                </code>
            </pre>
        </div>
        
    );
};

export default CodeSnippet;