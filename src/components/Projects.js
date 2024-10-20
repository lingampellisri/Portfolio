// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons'; // Import icons

// const Projects = () => {
//   return (
//     <section className="container mt-5">
//       <h2>My Projects</h2>
      
//       <div className="project">
//         <h3>Generative Neurologist</h3>
//         <p>This project detects brain tumors using machine learning.</p>
//         <a href="/assets/ppt.pptx" download>
//           <FontAwesomeIcon icon={faFileDownload} /> Download PPT
//         </a> | 
//         <a href="https://drive.google.com/file/d/1gYJAvyjNZULa_UqIMCKYUHnRUpIl9LjC/view" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faVideo} /> Watch Video
//         </a>
//       </div>
      
     
//     </section>
//   );
// }

// export default Projects;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons'; // Import icons

// const Projects = () => {
//   return (
//     <section className="container mt-5">
//       <h2>My Projects</h2>

//       {/* Project 1: Generative Neurologist */}
//       <div className="project my-4">
//         <h3>Generative Neurologist</h3>
//         <p>
//           The <strong>Generative Neurologist</strong> is an advanced AI-driven system designed for early detection and 
//           segmentation of brain tumors. By leveraging <strong>Deep Learning</strong> and <strong>Large Language Models (LLMs)</strong>, 
//           this project provides accurate classification and localization of tumors, assisting neurologists, radiologists, 
//           and medical professionals in making faster and more reliable diagnoses. 
//           The system uses a <strong>MERN stack</strong> for the frontend and backend integration, and MongoDB for efficient 
//           data management. This project aims to revolutionize medical diagnostics by improving early-stage detection 
//           and supporting healthcare professionals in real-time.
//         </p>
//         <p>
//           Key Features:
//           <ul>
//             <li>Brain tumor classification using deep learning models.</li>
//             <li>Tumor segmentation for precise tumor region identification.</li>
//             <li>Helps neurologists and radiologists in early-stage diagnosis.</li>
//             <li>Scalable backend powered by Node.js and Express, with MongoDB as the database.</li>
//             <li>Frontend built with React, providing a seamless user experience.</li>
//           </ul>
//         </p>
//         <a href="/assets/ppt.pptx" download>
//           <FontAwesomeIcon icon={faFileDownload} /> Download PPT
//         </a> | 
//         <a href="https://drive.google.com/file/d/1gYJAvyjNZULa_UqIMCKYUHnRUpIl9LjC/view" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faVideo} /> Watch Video
//         </a>
//       </div>

//       {/* Project 2: Jarvis - The Offline AI Assistant */}
//       <div className="project my-4">
//         <h3>Jarvis - The Offline AI Assistant</h3>
//         <p>
//           <strong>Jarvis</strong> is an AI-powered offline assistant developed using <strong>Python (PyQt5)</strong>, 
//           <strong> Machine Learning</strong>, and <strong>Deep Learning</strong> technologies. This assistant offers 
//           natural language processing and command execution without the need for an internet connection. 
//           The project was recognized at the <strong>Srujana Tech Fest</strong> and showcases the potential of 
//           AI-driven tools in everyday tasks and operations.
//         </p>
//         <a href="/assets/jarvis_ppt.pptx" download>
//           <FontAwesomeIcon icon={faFileDownload} /> Download PPT
//         </a> | 
//         <a href="https://drive.google.com/file/d/jarvis_video_link" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faVideo} /> Watch Video
//         </a>
//       </div>

//       {/* Project 3: MEGAMART - Online Shopping Platform */}
//       <div className="project my-4">
//         <h3>MEGAMART - Online Shopping Platform</h3>
//         <p>
//           <strong>MEGAMART</strong> is a dynamic online shopping platform developed as part of my final year diploma project. 
//           Built using <strong>HTML, ASP.NET, ADO.NET, MySQL, CSS</strong>, and <strong>JavaScript</strong>, this platform allows 
//           users to shop from nearby stores based on geographical proximity. It integrates real-time order tracking and 
//           ensures seamless transactions, making it a practical solution for local businesses to go online.
//         </p>
//         <a href="/assets/megabart_ppt.pptx" download>
//           <FontAwesomeIcon icon={faFileDownload} /> Download PPT
//         </a> | 
//         <a href="https://drive.google.com/file/d/megabart_video_link" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faVideo} /> Watch Video
//         </a>
//       </div>
      
//     </section>
//   );
// }

// export default Projects;

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faVideo } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Projects = () => {
  return (
    <section className="container mt-5">
      <h2>My Projects</h2>

      {/* Project 1: Generative Neurologist */}
      <div className="project my-4">
        <h3>Generative Neurologist</h3>
        <p>
          The <strong>Generative Neurologist</strong> is an AI-driven system for early detection and segmentation of brain tumors. 
          Using <strong>Deep Learning</strong> and <strong>Large Language Models (LLMs)</strong>, it classifies and identifies tumor regions, 
          assisting neurologists, radiologists, and medical practitioners in improving diagnostic accuracy. 
          The project uses the <strong>MERN stack</strong> for frontend and backend integration, and MongoDB for managing patient data.
        </p>
        <p>
          Key Features:
          <ul>
            <li>Brain tumor classification using deep learning models.</li>
            <li>Tumor region segmentation for precise identification.</li>
            <li>Helps medical professionals with early diagnosis and accurate results.</li>
            <li>Backend and data management powered by MongoDB, Node.js, and Express.</li>
            <li>Responsive frontend interface built with React.</li>
          </ul>
        </p>
        <a href="/assets/ppt.pptx" download>
          <FontAwesomeIcon icon={faFileDownload} /> Download PPT
        </a> | 
        <a href="https://drive.google.com/file/d/1gYJAvyjNZULa_UqIMCKYUHnRUpIl9LjC/view" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faVideo} /> Watch Video
        </a> | 
        <a href="https://github.com/your-username/generative-neurologist" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> View on GitHub
        </a>

        <h4 className="mt-3">Tech Stack:</h4>
        <ul>
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>AI/ML Models:</strong> Deep Learning, LLMs</li>
        </ul>
      </div>

      {/* Project 2: Jarvis - The Offline AI Assistant */}
      <div className="project my-4">
        <h3>Jarvis - The Offline AI Assistant</h3>
        <p>
          <strong>Jarvis</strong> is an AI-powered assistant developed using <strong>Python (PyQt5)</strong>, 
          <strong> Machine Learning</strong>, and <strong>Deep Learning</strong>. It performs offline tasks with natural language processing. 
          This project won the <strong>Srujana Tech Fest Award</strong> for its innovative design in AI assistant technology.
        </p>
        <a href="/assets/jarvis_ppt.pptx" download>
          <FontAwesomeIcon icon={faFileDownload} /> Download PPT
        </a> | 
        <a href="https://drive.google.com/file/d/jarvis_video_link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faVideo} /> Watch Video
        </a> | 
        <a href="https://github.com/your-username/jarvis-ai-assistant" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> View on GitHub
        </a>

        <h4 className="mt-3">Tech Stack:</h4>
        <ul>
          <li><strong>Framework:</strong> Python (PyQt5)</li>
          <li><strong>AI/ML:</strong> Machine Learning, Deep Learning</li>
          <li><strong>Natural Language Processing:</strong> Offline command execution</li>
        </ul>
      </div>

      {/* Project 3: MEGAMART - Online Shopping Platform */}
      <div className="project my-4">
        <h3>MEGAMART - Online Shopping Platform</h3>
        <p>
          <strong>MEGAMART</strong> is an online shopping platform developed during my diploma final year. 
          The platform allows users to browse and order products from nearby shops based on their location, 
          making it easier for local stores to reach customers. It was built using <strong>HTML, ASP.NET, ADO.NET, MySQL, CSS,</strong> and <strong>JavaScript</strong>.
        </p>
        <a href="/assets/megabart_ppt.pptx" download>
          <FontAwesomeIcon icon={faFileDownload} /> Download PPT
        </a> | 
        <a href="https://drive.google.com/file/d/megabart_video_link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faVideo} /> Watch Video
        </a> | 
        <a href="https://github.com/your-username/megabart-shopping-platform" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> View on GitHub
        </a>

        <h4 className="mt-3">Tech Stack:</h4>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> ASP.NET, ADO.NET</li>
          <li><strong>Database:</strong> MySQL</li>
        </ul>
      </div>

    </section>
  );
}

export default Projects;


