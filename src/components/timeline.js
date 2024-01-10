import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Timeline from 'rsuite/Timeline';
import './timeline.css';
import CreditCardIcon from '@rsuite/icons/legacy/CreditCard';
import PlaneIcon from '@rsuite/icons/legacy/Plane';
import TruckIcon from '@rsuite/icons/legacy/Truck';
import UserIcon from '@rsuite/icons/legacy/User';
import CheckIcon from '@rsuite/icons/legacy/Check';
import "rsuite/dist/rsuite.css";

const WorkTimeline = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
        <Timeline className="custom-timeline" align={'alternate'} isItemActive={index => index === 1}>
            <Timeline.Item uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: false">
                <p>Expected May 2025</p>
                <div style={{color:"#de1b85", fontSize: isSmallScreen ? "18px" : "24px", lineHeight: 1,fontWeight: 550}}>B.A. in Mathematics, B.A. in Geography, Minor in Computer Science</div>
                <div style={{color:"white", fontSize: isSmallScreen ? "12px" : "18px", marginTop:"4px", marginBottom: "4px"}}>Macalester College</div>
                <div style={{fontSize: isSmallScreen ? "12px" : "14px", marginTop:"8px"}}>
                    <ul class="uk-list">
                        <li>Relevant Coursework:</li>
                        <li>Mathematics: MATH 236 Linear Algebra, MATH 376 Algebraic Structures, MATH 375 Graph Theory, MATH 471 Topology, MATH 377 Real Analysis, MATH 365 Computational Linear Algebra,
                            MATH 477 Projects in Analysis
                        </li>
                        <li>Computer Science: COMP 128 Data Structures, COMP 225 Software Design & Development, COMP 221 Algorithm Design & Analysis, COMP 435 Data Visualization</li>
                        <li>Geography: GEOG 225 Intro to GIS, GEOG 362 Remote Sensing of Environment</li>
                    </ul>

                </div>
            </Timeline.Item>
            <Timeline.Item uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: false">
                <p>September 2023 - Present</p>
                <div style={{color:"#de1b85", fontSize: isSmallScreen ? "18px" : "24px", lineHeight: 1,fontWeight: 550}}>Mathematics Preceptor and Grader</div>
                <div style={{color:"white", fontSize: isSmallScreen ? "12px" : "18px", marginTop:"4px", marginBottom: "4px"}}>Linear Algebra, Algebraic Structures</div>
                <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleTurquoise", marginRight: 8, color: "#050409", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>R and RStudio</span>
                <span class="uk-label" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Teaching</span>
                <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "palegreen", color: "#050409", marginRight: 8, textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Communication</span>
                <div style={{fontSize: isSmallScreen ? "12px" : "14px", marginTop:"8px"}}>
                    As a preceptor for the Mathematics Department at Macalester College, I hold office hours where students are able to get one-on-one and group
                    tutoring. Here, students seek help to understand concepts learned in class, get direction and help on homework, and develop problem-solving techniques.
                    During my time at Macalester, I have precepted for Linear Algebra and Algebraic Structures.
                </div>
            </Timeline.Item>
            <Timeline.Item uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false">
                <p>January 2023 - August 2023</p>
                <div style={{color:"#de1b85", fontSize: isSmallScreen ? "18px" : "24px", lineHeight: 1,fontWeight: 550}}>Traffic Analyst Fellow</div>
                <div style={{color:"white", fontSize: isSmallScreen ? "12px" : "18px", marginTop:"4px", marginBottom: "4px"}}>ReConnect Rondo</div>
                <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleGreen", marginRight: 8, color: "#050409", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>ArcGIS Pro</span>
                <span class="uk-label" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Adobe XD</span>
                <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "palegreen", marginRight: 8, color: "#050409", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>MOVES3</span>
                <div style={{fontSize: isSmallScreen ? "12px" : "14px", marginTop:"8px"}}>
                    <ul class="uk-list">
                        <li>As a 2023 <a class="uk-link-muted" href="https://www.macalester.edu/politicalscience/studentopportunities/chuck-green-fellowship/" style={{color: "PaleTurquoise"}} target="_blank">Chuck Green Fellow</a> at Macalester College,
                        I had the opportunity to partner with ReConnect Rondo, a Saint Paul, MN, nonprofit organization.</li>
                        <li>Designed and produced an emission estimation traffic study using EPA-regulated guidelines and software to provide understanding of existing conditions for the use of future development.</li>
                        <li>Utilized ArcGIS, MOVES3, and Adobe XD to perform analysis and create graphics to present my findings.</li>
                    </ul>
                
                </div>
            </Timeline.Item>
            <Timeline.Item uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: false">
                <p>September 2021 - May 2023</p>
                <div style={{color:"#de1b85", fontSize: isSmallScreen ? "18px" : "24px", lineHeight: 1,fontWeight: 550}}>Makerspace Technician</div>
                <div style={{color:"white", fontSize: isSmallScreen ? "12px" : "18px", marginTop:"4px", marginBottom: "4px"}}>Macalester College Idea Lab</div>
                <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleGreen", marginRight: 8, color: "#050409", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>3D-printing</span>
                <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleGreen", marginRight: 8, color: "#050409", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Adobe XD</span>
                <span class="uk-label" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "PaleGreen", color: "#050409", marginRight: 8, fontVariantCaps:"normal", textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Problem-solving</span>
                <span class="uk-label uk-label-success" style={{fontSize: isSmallScreen ? "10px" : "14px", backgroundColor: "palegreen", color: "#050409", marginRight: 8, textTransform: "none", borderRadius: 16, paddingBottom: 1}}>Communication</span>
                <div style={{fontSize: isSmallScreen ? "12px" : "14px", marginTop:"8px"}}>
                    <ul class="uk-list">
                        <li>Streamlined and repaired equipment and processes across the makerspace to ensure quality and satisfaction among visitors of the space.</li>
                        <li>Taught technical and creative skills such as 3d-printing, sewing, and watercolor painting in workshops to groups of 10-20 people at a time.</li>
                    </ul>
                </div>
            </Timeline.Item>
        </Timeline>
      );
};

export default WorkTimeline;