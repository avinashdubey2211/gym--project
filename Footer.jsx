import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import gfg from "../../assets/gfg.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
    // return (
    //     <div className="Footer-container">
    //         <hr />
    //         <div className="footer">
    //             <div className="social-links">
    //                 <img src={Github} alt="Github" />
    //                 <img src={gfg} alt="Instagram" />
    //                 <img src={LinkedIn} alt="LinkedIn" />
    //             </div>
    //             <div className="logo-f">
    //                 <img src={Logo} alt="Logo" />
    //             </div>
    //         </div>
    //         <div className="blur blur-f-1"></div>
    //         <div className="blur blur-f-2"></div>
    //     </div>
    // );
// };
return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                {/* GitHub Link */}
                <a 
                    href="https://github.com/avinashdubey2211" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={Github} alt="Github" />
                </a>

                {/* Instagram Link */}
                <a 
                    href="https://www.geeksforgeeks.org/user/avinashdubey2211/"  // अपना Instagram Link डालें
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={gfg} alt="gfg" />
                </a>

                {/* LinkedIn Link */}
                <a 
                    href="https://www.linkedin.com/in/avinash-dubey-13a688224/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
            </div>
            <div className="logo-f">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
);
};

export default Footer;
