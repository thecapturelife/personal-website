import React from 'react';
import './resumedw.css';

const DownloadButton: React.FC = () => {
  return (
    <a 
      href="/ALBIN-JOHN (2).pdf"  
      download="resume.pdf"
      className="button px-4 py-2"
    >
      <span className="button-content">Download Resume</span>
    </a>
  );
};

export default DownloadButton;

