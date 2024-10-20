// import React from 'react';
// import profileImage from '../assets/profile.png'; // Adjust the path if necessary
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'; // Brand icons
// import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons'; // Solid icons for download and video links

// const Header = () => {
//   return (
//     <header className="bg-dark text-white text-center py-5">
//       {/* Profile Image */}
//       <img
//         src={profileImage}
//         alt="Profile"
//         className="rounded-circle mb-3"
//         style={{ width: '150px', height: '150px', objectFit: 'cover' }}
//       />

//       <h1>Srinivas Lingampelli</h1>
//       <p>
//         Email:
//         <a href="mailto:srinivaslingampelli18@gmail.com" className="text-white">srinivaslingampelli18@gmail.com</a>
//       </p>
//       <p>
//         <FontAwesomeIcon icon={faVideo} /> +919491113036
//       </p>

//       {/* College Information */}
//       <p>
//         College: <a href="https://maps.app.goo.gl/rujzcao59E33ytA86" target="_blank" rel="noopener noreferrer" className="text-white">Keshav Memorial Institute of Technology, Narayanaguda, Hyderabad</a>
//       </p>

//       {/* Social Links with Icons */}
//       <div className="social-links">
//         <a href="https://github.com/lingampellisri" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faGithub} /> GitHub
//         </a>
//         <span>|</span>
//         <a href="https://www.linkedin.com/in/lingampelli-srinivas/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
//         </a>
//         <span>|</span>
//         <a href="https://www.codingninjas.com/codestudio/profile/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faCodepen} /> Coding Ninjas
//         </a>
//         <span>|</span>
//         <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faCodepen} /> LeetCode
//         </a>
//         <span>|</span>
//         <a href="https://www.smartinterviews.com/profile/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           Smart Interviews
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Header;


// // src/components/Header.js
// import React from 'react';
// import profileImage from '../assets/profile.png'; // Adjust the path if necessary
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'; // Brand icons
// import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons'; // Solid icons for download and video links
// import { Link } from 'react-router-dom'; // Import Link for routing

// const Header = () => {
//   return (
//     <header className="bg-dark text-white text-center py-5">
//       {/* Profile Image */}
//       <img
//         src={profileImage}
//         alt="Profile"
//         className="rounded-circle mb-3"
//         style={{ width: '150px', height: '150px', objectFit: 'cover' }}
//       />

//       <h1>Srinivas Lingampelli</h1>
//       <p>
//         Email:
//         <a href="mailto:srinivaslingampelli18@gmail.com" className="text-white">srinivaslingampelli18@gmail.com</a>
//       </p>
//       <p>
//         <FontAwesomeIcon icon={faVideo} /> +919491113036
//       </p>

//       {/* College Information */}
//       <p>
//         College: <a href="https://maps.app.goo.gl/rujzcao59E33ytA86" target="_blank" rel="noopener noreferrer" className="text-white">Keshav Memorial Institute of Technology, Narayanaguda, Hyderabad</a>
//       </p>

//       {/* Social Links with Icons */}
//       <div className="social-links">
//         <a href="https://github.com/lingampellisri" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faGithub} /> GitHub
//         </a>
//         <span>|</span>
//         <a href="https://www.linkedin.com/in/lingampelli-srinivas/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
//         </a>
//         <span>|</span>
//         <a href="https://www.codingninjas.com/codestudio/profile/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faCodepen} /> Coding Ninjas
//         </a>
//         <span>|</span>
//         <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faCodepen} /> LeetCode
//         </a>
//         <span>|</span>
//         <a href="https://www.smartinterviews.com/profile/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           Smart Interviews
//         </a>
//         {/* Projects Button */}
//         <div className="mt-3">
//           <Link to="/projects" className="btn btn-primary">
//             View Projects
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.js

// import React from 'react';
// import profileImage from '../assets/profile.png'; // Adjust the path if necessary
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
// import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const Header = () => {
//   return (
//     <header className="bg-dark text-white text-center py-5">
//       {/* Profile Image */}
//       <img
//         src={profileImage}
//         alt="Profile"
//         className="rounded-circle mb-3"
//         style={{ width: '150px', height: '150px', objectFit: 'cover' }}
//       />

//       <h1>Srinivas Lingampelli</h1>
//       <p>
//         Email:
//         <a href="mailto:srinivaslingampelli18@gmail.com" className="text-white">srinivaslingampelli18@gmail.com</a>
//       </p>
//       <p>
//         <FontAwesomeIcon icon={faVideo} /> +919491113036
//       </p>

//       {/* College Information */}
//       <p>
//         College: <a href="https://maps.app.goo.gl/rujzcao59E33ytA86" target="_blank" rel="noopener noreferrer" className="text-white">Keshav Memorial Institute of Technology</a>
//       </p>

//       {/* Social Links */}
//       <div className="social-links">
//         <a href="https://github.com/lingampellisri" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faGithub} /> GitHub
//         </a>
//         <span>|</span>
//         <a href="https://www.linkedin.com/in/lingampelli-srinivas/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
//         </a>
//         <span>|</span>
//         <a href="https://www.codingninjas.com/codestudio/profile/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//           <FontAwesomeIcon icon={faCodepen} /> Coding Ninjas
//         </a>
//       </div>

//       {/* Projects Button */}
//       <div className="mt-3">
//         <Link to="/projects" className="btn btn-primary">
//           View Projects
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import profileImage from '../assets/profile.png'; // Adjust the path if necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-dark text-white text-center py-5">
      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />

      <h1>Srinivas Lingampelli</h1>
      <p>
        Email:
        <a href="mailto:srinivaslingampelli18@gmail.com" className="text-white">srinivaslingampelli18@gmail.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faVideo} /> +919491113036
      </p>

      {/* College Information */}
      <p>
        College: <a href="https://maps.app.goo.gl/rujzcao59E33ytA86" target="_blank" rel="noopener noreferrer" className="text-white">Keshav Memorial Institute of Technology</a>
      </p>

      {/* Internships Information */}
      <p>
        <strong>Current Role:</strong> SDE Intern at Cyberguard360 (Remote)
      </p>
      <p>
        <strong>Selected For:</strong> DRDO GTRE Apprenticeship, Bengaluru
      </p>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/lingampellisri" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/lingampelli-srinivas/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <span>|</span>
        <a href="https://www.naukri.com/code360/profile/8cbe0e18-f6ea-4c08-a7b4-873742dc6cc0" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FontAwesomeIcon icon={faCodepen} /> Coding Ninjas
        </a>
        <span>|</span>
        <a href="https://leetcode.com/u/srinivas_lingampelli/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FontAwesomeIcon icon={faCodepen} /> LeetCode
        </a>
      </div>

      {/* Projects Button */}
      <div className="mt-3">
        <Link to="/projects" className="btn btn-primary">
          View Projects
        </Link>
      </div>
    </header>
  );
};

export default Header;
