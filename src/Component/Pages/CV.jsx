import React from 'react';
import { FaDownload } from 'react-icons/fa'; // For download icon

const CV = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 pt-[5.5rem]">
      {/* Card container with centered content */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-8">
          My Curriculum Vitae (CV)
        </h1>
        
        {/* PDF Viewer Section */}
        <div className="relative w-full mb-8">
          
        <iframe
            src="../../Image/Salah Mohamed Resume.pdf" 
            className="w-full h-[600px] border-2 border-gray-300 rounded-lg"
            title="My CV"
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://drive.google.com/file/d/1I_dMYExCcPxr7VnNBSjHweadfevOEHEH/view?usp=sharing" // Make sure the path is correct for download
            download
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV;
