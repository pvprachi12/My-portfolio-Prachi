import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>
        <TypeAnimation
          sequence={[
            "Hi, I'm Prachi Vasantrao Pawar",
            1000,
            "Software Engineer",
            1000,
            "Frontend Developer",
            1000,
            "HTML | CSS | Bootstrap | Figma | ReactJS | AngularJS | Python | Webflow",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <div className="resume-link">
        <a
          href="https://drive.google.com/file/d/1xq2-jKaruUh2ZlLeP_B5pPeLXmM5Ixu6/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default App;
