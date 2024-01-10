import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Experience = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <div>
            <div style={{marginBottom: 48}} uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                <div class="uk-center" align="center" style={{width: "100vw"}}>
                <div align="left" style={{display:"inline-block", width: isSmallScreen ? "80vw" : "50vw"}}>
                    <div class="uk-flex uk-flex-center" style={{justifyContent: "space-between", width: "100%", marginBottom: 8}}>
                        <div style={{color:"#de1b85", fontSize: isSmallScreen ? "18px" : "24px", lineHeight: 1,fontWeight: 550}}>Mathematics Preceptor and Grader</div>
                        <div style={{color:"white", fontSize: isSmallScreen ? "10px" : "14px", marginLeft:"12px"}}>September 2023 - Present</div>
                    </div>
                    <div style={{color:"white", fontSize: isSmallScreen ? "12px" : "18px", marginTop:"-6px"}}>Linear Algebra, Algebraic Structures</div>
                    <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleTurquoise", marginRight: 8, color: "#050409", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>R and RStudio</span>
                    <span class="uk-label" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Teaching</span>
                    <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "palegreen", color: "#050409", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Communication</span>
                    <div style={{color:"white", fontSize: isSmallScreen ? "12px" : "14px", marginTop:"8px", width: isSmallScreen ? "80vw" : "50vw"}}>
                        As a preceptor for the Mathematics Department at Macalester College, I hold office hours where students are able to get one-on-one and group
                        tutoring. Here, students seek help to understand concepts learned in class, get direction and help on homework, and develop problem-solving techniques.
                        During my time at Macalester, I have precepted for Linear Algebra and Algebraic Structures.
                    </div>
                    </div>
                </div>
            </div>

            <div style={{marginBottom: 48}} uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                <div class="uk-center" align="center" style={{width: "100vw"}}>
                <div align="left" style={{display:"inline-block", width: isSmallScreen ? "80vw" : "50vw"}}>
                    <div class="uk-flex uk-flex-center" style={{justifyContent: "space-between", width: "100%", marginBottom: 8}}>
                        <div style={{color:"#de1b85", fontSize: isSmallScreen ? "22px" : "28px", lineHeight: 1,fontWeight: 550}}>Traffic Analyst Fellow</div>
                        <div style={{color:"white", fontSize: isSmallScreen ? "14px" : "18px", marginLeft:"12px"}}>January 2023 - August 2023</div>
                    </div>
                    <div style={{color:"white", fontSize: isSmallScreen ? "16px" : "22px", marginTop:"-8px"}}>ReConnect Rondo</div>
                    <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>ArcGIS Pro</span>
                    <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Adobe XD</span>
                    <span class="uk-label" style={{backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>MOVES3</span>
                    <div style={{color:"white", fontSize: isSmallScreen ? "14px" : "16px", marginTop:"8px", width: isSmallScreen ? "80vw" : "50vw"}}>
                        As a 2023 <a class="uk-link-muted" href="https://www.macalester.edu/politicalscience/studentopportunities/chuck-green-fellowship/" style={{color: "PaleTurquoise"}} target="_blank">Chuck Green Fellow</a> at Macalester College,
                        I had the opportunity to partner with ReConnect Rondo, a Saint Paul, MN, nonprofit organization.
                        Throughout my time at ReConnect Rondo, I utilized my geography and mathematics skills to perform a study on how existing traffic conditions in the Rondo area affect Carbon Monoxide and Particulate Matter emissions.
                        I spent the majority of my time performing CO and PM analyses and congregating my findings into a final report using software such as MOVES3 and ArcGIS Pro.
                    </div>
                    </div>
                </div>
            </div>

            <div style={{marginBottom: 48}} uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                <div class="uk-center" align="center" style={{width: "100vw"}}>
                <div align="left" style={{display:"inline-block", width: isSmallScreen ? "80vw" : "50vw"}}>
                    <div class="uk-flex uk-flex-center" style={{justifyContent: "space-between", width: "100%", marginBottom: 8}}>
                        <div style={{color:"#de1b85", fontSize: isSmallScreen ? "22px" : "28px", lineHeight: 1,fontWeight: 550}}>Makerspace Technician</div>
                        <div style={{color:"white", fontSize: isSmallScreen ? "14px" : "18px", marginLeft:"12px"}}>September 2021 - May 2023</div>
                    </div>
                    <div style={{color:"white", fontSize: isSmallScreen ? "16px" : "22px", marginTop:"-8px"}}>Macalester College Idea Lab</div>
                    <div style={{color:"white", fontSize: isSmallScreen ? "14px" : "16px", marginTop:"8px", width: isSmallScreen ? "80vw" : "50vw"}}>
                        <ul class="uk-list uk-list-bullet">
                            <li>Streamlined and repaired equipment and processes across the makerspace to ensure quality and satisfaction among visitors of the space.</li>
                            <li>Taught technical and creative skills such as 3d-printing, sewing, and watercolor painting in workshops to groups of 10-20 people at a time.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;