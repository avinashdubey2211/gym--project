// import React, { useState } from 'react'
// import './Hearder.css'
// import Logo from '../../assets/logo.png'
// import bars from "../../assets/bars.png"
// import {Link} from  "react-scroll"
// const Hearder = () => {
//   const mobile = window.innerWidth<=768 ? true: false;
 
//   const[menuOpened, setMenuOpened] = useState(false)
//   return (
//     <div className="header">
//     <img src={Logo} alt="" className="logo" />
//     {menuOpened === false && mobile === true ? (
//         <div>
//           style={{
//             backgroundColor: "var(--appColor)",
//             padding: "0.5rem",
//              borderRadius: "5px",
// }}
//      onClick={()=>setMenuOpened(true)}
//             <img src={bars} alt="" style={{width: '1.5rem', height:'1.5rem' }} />
//         </div>
//     ) : (
//         <ul className="header-menu">
//              <li > 
//               <Link
//               onClick={() => setMenuOpened(false)}
//               to ='home'
//               span={true}
//                smooth={true}
//                   >Home</Link></li>

//            <li>
//            <Link

//           onClick={() => setMenuOpened(false)}
//            to ='Programs'
//               span={true}
//                smooth={true}
//           >Programs
//           </Link></li>


//           <li>
//             <Link
//            onClick={() => setMenuOpened(false)}
//            to ='Reasons'
//            span={true}
//             smooth={true}
           
//            >Why Us</Link></li>

//           <li>
//             <Link
//             onClick={() => setMenuOpened(false)}
//             to ='plans'
//             span={true}
//              smooth={true}
            
            
            
//             >Plans</Link></li>




//           <li><Link

//            onClick={() => setMenuOpened(false)}
//          to ='Testimonials'
//            span={true}
//            smooth={true}
//           >Testimonials</Link></li>
//         </ul>
//     )}
// </div>

           

        
    

//   );
// }

// export default Hearder
import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import './Hearder.css';
import Logo from '../../assets/logo.png';
import Bars from "../../assets/bars.png";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if(window.innerWidth > 768) setMenuOpened(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => {
    if(isMobile) setMenuOpened(false);
  };

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      
      {isMobile && (
        <div 
          className="menu-icon"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <img 
            src={Bars} 
            alt="menu" 
            style={{ 
              width: '1.5rem', 
              height: '1.5rem',
              filter: 'brightness(0) invert(1)'
            }} 
          />
        </div>
      )}

      <ul className={`header-menu ${menuOpened ? 'active' : ''}`}>
        <li>
          <Link
            onClick={closeMenu}
            to="home"
            spy={true}
            smooth={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={closeMenu}
            to="Programs"
            spy={true}
            smooth={true}
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            onClick={closeMenu}
            to="Reasons"
            spy={true}
            smooth={true}
          >
            Why Us
          </Link>
        </li>
        <li>
          <Link
            onClick={closeMenu}
            to="plans"
            spy={true}
            smooth={true}
          >
            Plans
          </Link>
        </li>
        <li>
          <Link
            onClick={closeMenu}
            to="Testimonials"
            spy={true}
            smooth={true}
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;