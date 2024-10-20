// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import About from './components/About';
// import Projects from './components/Projects';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <About />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import Header from './components/Header'; // Import Header component
import About from './components/About'; // Import About component
import Projects from './components/Projects'; // Import Projects component
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* The header appears on all pages */}

        {/* Routes for page navigation */}
        <Routes>
          <Route path="/" element={<About />} /> {/* Default route, shows About section */}
          <Route path="/projects" element={<Projects />} /> {/* Projects route */}
          {/* You can add more routes as needed */}
        </Routes>

        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;

