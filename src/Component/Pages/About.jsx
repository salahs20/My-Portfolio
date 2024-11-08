import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 pt-[5.5rem]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Me
        </h1>

        <p className="text-lg mb-4">
          Hello, I’m Salah Mohamed, a passionate Junior Front-End Developer with
          over a year of hands-on experience in crafting responsive and
          user-friendly web applications.
        </p>

        <p className="text-lg mb-4">
          I am proficient in HTML, CSS, and JavaScript, and have a strong
          understanding of modern front-end frameworks, especially React. I
          enjoy bringing creative designs to life while ensuring a seamless user
          experience and high-performance websites. I’m committed to improving
          my skills and staying up-to-date with the latest web development
          trends.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Tools and Technologies I Use
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>HTML5</strong> - Markup language used to structure web
            pages.
          </li>
          <li>
            <strong>CSS3</strong> - Styling language for creating visually
            appealing layouts.
          </li>
          <li>
            <strong>JavaScript</strong> - Programming language to make web pages
            interactive.
          </li>
          <li>
            <strong>React</strong> - A JavaScript library for building user
            interfaces, focusing on reusable components.
          </li>
          <li>
            <strong>Tailwind CSS</strong> - A utility-first CSS framework for
            rapid UI development.
          </li>
          <li>
            <strong>Git</strong> - Version control system for tracking changes
            in my projects.
          </li>
        </ul>

        <p className="text-lg mt-6">
          I’m always looking for opportunities to contribute to innovative
          projects and work with teams that strive for excellence in web
          development. Let’s connect and build something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
