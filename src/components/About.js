// import React from 'react';

// const About = () => {
//   return (
//     <section className="container mt-5">
//       <h2>About Me</h2>
//       <p>I am a passionate and dedicated Computer Science Engineering (CSE) student in my 3rd year at Keshav Memorial Institute of Technology (KMIT), Hyderabad. With a strong enthusiasm for technology, I have successfully completed several projects that showcase my expertise in cutting-edge technologies. I am proficient in Java, SQL, Python, and the MERN stack.

// I recently developed the Generative Neurologist project, leveraging Large Language Models (LLMs), Deep Learning, and the MERN stack. This project is designed to assist in early brain tumor detection, using AI to enhance medical diagnostics. Currently, I am working as a Software Development Engineer (SDE) intern at Cyberguard360, a US-based cybersecurity company, where my focus is on data recovery through device drivers, firmware, and data reconstruction following ransomware attacks or other data breaches. I work remotely in this role as part of the R&D team.

// One of my notable achievements includes the Jarvis: The Offline AI Assistant project, which was developed using Python (PyQt5), Machine Learning, and Deep Learning. This project earned the prestigious Srujana Tech Fest Award from the Telangana state government, a recognition I am incredibly proud of. In my earlier academic journey, I developed MEGAMART, an online shopping platform during my diploma final year, utilizing technologies like HTML, ASP.NET, ADO.NET, MySQL, CSS, and JavaScript. The platform enabled customers to order products from nearby shops within a specified range.

// With a passion for research and innovation, I am always eager to learn and contribute to the ever-evolving field of technology.</p>
//     </section>
//   );
// }

// export default About;


import React from 'react';

const About = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">About Me</h2>
      <p className="lead">
        I am a driven and innovative Computer Science Engineering (CSE) student, currently in my 3rd year at 
        <strong> Keshav Memorial Institute of Technology (KMIT)</strong>, Hyderabad. I have a strong passion for technology 
        and have developed a range of projects that demonstrate my expertise in the latest cutting-edge technologies. 
        I am proficient in <strong>Java, SQL, Python, and the MERN stack</strong>.
      </p>
      <li className="mt-3">
          <strong>Cyberguard360 SDE Internship</strong>: I am currently interning as a Software Development Engineer (SDE) at 
          <strong> Cyberguard360</strong>, a US-based cybersecurity firm. My primary role involves 
          <strong> data recovery</strong> using device drivers and firmware and reconstructing data post-ransomware 
          or other cybersecurity attacks. This remote position also allows me to contribute to the <strong> Research & Development </strong> team in 
          cutting-edge cybersecurity technologies.
        </li>
      <h3 className="mt-4">Projects</h3>
      <ul className="list-unstyled">
        <li>
          <strong>Generative Neurologist</strong>: Leveraging <strong>Large Language Models (LLMs)</strong>, 
          <strong> Deep Learning</strong>, and the <strong>MERN stack</strong>, this project focuses on early brain 
          tumor detection through AI-driven medical diagnostics. This project showcases my ability to integrate 
          cutting-edge AI and full-stack technologies for impactful healthcare solutions.
        </li>
        
        <li className="mt-3">
          <strong>Jarvis: The Offline AI Assistant</strong>: Developed using <strong>Python (PyQt5)</strong>, 
          <strong> Machine Learning</strong>, and <strong>Deep Learning</strong>, this project earned me the 
          prestigious <strong>Srujana Tech Fest Award</strong> from the Telangana state government. This offline AI 
          assistant demonstrates my ability to combine natural language processing and deep learning.
        </li>
        <li className="mt-3">
          <strong>MEGAMART (Diploma Final Year Project)</strong>: Developed an online shopping platform using 
          <strong> HTML, ASP.NET, ADO.NET, MySQL, CSS</strong>, and <strong>JavaScript</strong>. The platform allowed 
          customers to order products from nearby shops based on geographical proximity, emphasizing my skills in 
          building scalable, user-focused web solutions.
        </li>
      </ul>

      <h3 className="mt-4">Tech Stack</h3>
      <p>
        <strong>Languages & Frameworks:</strong> Java, Python, JavaScript, HTML, CSS, ASP.NET, ADO.NET<br />
        <strong>Databases:</strong> MySQL, MongoDB<br />
        <strong>Frontend:</strong> React.js, Bootstrap<br />
        <strong>Backend:</strong> Node.js, Express.js<br />
        <strong>AI/ML:</strong> Deep Learning, Machine Learning, PyQt5<br />
        <strong>Other Tools:</strong> Git, Docker, REST APIs
      </p>

      <h3 className="mt-4">Career Focus</h3>
      <p className="lead">
        My career goal is to work on complex software systems that leverage artificial intelligence, cybersecurity, 
        and cloud technologies to solve real-world challenges. I am eager to apply my knowledge in full-stack 
        development and data-driven technologies to contribute to high-impact projects.
      </p>
    </section>
  );
}

export default About;
