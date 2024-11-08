import React from "react";
import homePhoto from "../../Image/68bc14d31f1dc742b6855cec6e6ed3cf.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24 px-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[90%] max-w-screen-lg bg-white shadow-lg rounded-lg p-6 md:p-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-lg md:text-xl font-medium text-gray-700">Hello, I am</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-cyan-600 transition-colors">
            Salah Mohamed Salah
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-600">About Me</h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I am a Junior Front-End Developer with over a year of hands-on experience
            creating responsive and user-friendly web applications. Proficient in HTML, 
            CSS, and JavaScript, with a solid understanding of modern frameworks like React.
            Passionate about implementing design principles and enhancing user experience.
            A collaborative team player with excellent problem-solving skills and a dedication
            to continuous learning. I am excited to contribute to innovative projects,
            improve web functionality, and deliver high-quality code.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={homePhoto}
            alt="Portrait of Salah Mohamed Salah"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
