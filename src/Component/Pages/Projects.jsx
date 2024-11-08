import React from "react";
import project_1_photo from "../../Image/Screenshot 2024-11-08 185401.png";
import project_2_photo from "../../Image/Screenshot 2024-11-08 171652.png";
const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 pt-[5.5rem]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          My Projects
        </h1>
        {/* Project 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">
            Project 1: Portfolio Website
          </h2>
          <div className="mb-4">
            <img
              src={project_1_photo} // Replace with your project image link
              alt="Portfolio Website"
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-lg mb-4">
            A personal portfolio website to showcase my skills, projects, and
            contact information. It includes an interactive UI, responsive
            design, and smooth transitions.
          </p>
          <p className="mb-4">
            <strong>Technologies used:</strong> HTML, CSS, JavaScript, React,
            Tailwind CSS
          </p>
          <div className="flex justify-between">
            <a
              href="https://salah-mohamed.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Project
            </a>
            <a
              href="https://github.com/salahs20/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Code (GitHub)
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">
            Project 2: E-Commerce App
          </h2>
          <div className="mb-4">
            <img
              src={project_2_photo} // Replace with your project image link
              alt="E-Commerce App"
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-lg mb-4">
            A fully functional e-commerce website that allows users to browse
            products, add them to their cart, and make purchases. It features
            product filtering, a shopping cart, and secure checkout.
          </p>
          <p className="mb-4">
            <strong>Technologies used:</strong> React, Redux, Node.js, MongoDB,
            Express, Stripe API
          </p>
          <div className="flex justify-between">
            <a
              href="https://fresh-cart-lovat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Project
            </a>
            <a
              href="https://github.com/salahs20/Fresh-Cart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Code (GitHub)
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">
            Project 3: Task Management App
          </h2>
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your project image link
              alt="Task Management App"
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-lg mb-4">
            A task management app to help users keep track of their daily tasks
            and to-do lists. Features include task categorization, priority
            setting, and due date reminders.
          </p>
          <p className="mb-4">
            <strong>Technologies used:</strong> React, Firebase, Material-UI,
            JavaScript
          </p>
          <div className="flex justify-between">
            <a
              href="https://your-task-app-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Project
            </a>
            <a
              href="https://github.com/yourusername/task-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Code (GitHub)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// import React from 'react';

// const Projects = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 pt-[5.5rem]">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
//         <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">My Projects</h1>

//         {/* Project 1 */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-blue-500 mb-2">Project 1: Portfolio Website</h2>
//           <p className="text-lg mb-4">
//             A personal portfolio website to showcase my skills, projects, and contact information. It includes an interactive UI, responsive design, and smooth transitions.
//           </p>
//           <p className="mb-4">
//             <strong>Technologies used:</strong> HTML, CSS, JavaScript, React, Tailwind CSS
//           </p>
//           <div className="flex justify-between">
//             <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
//               View Project
//             </a>
//             <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
//               View Code (GitHub)
//             </a>
//           </div>
//         </div>

//         {/* Project 2 */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-blue-500 mb-2">Project 2: E-Commerce App</h2>
//           <p className="text-lg mb-4">
//             A fully functional e-commerce website that allows users to browse products, add them to their cart, and make purchases. It features product filtering, a shopping cart, and secure checkout.
//           </p>
//           <p className="mb-4">
//             <strong>Technologies used:</strong> React, Redux, Node.js, MongoDB, Express, Stripe API
//           </p>
//           <div className="flex justify-between">
//             <a href="https://your-ecommerce-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
//               View Project
//             </a>
//             <a href="https://github.com/yourusername/e-commerce-app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
//               View Code (GitHub)
//             </a>
//           </div>
//         </div>

//         {/* Project 3 */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-blue-500 mb-2">Project 3: Task Management App</h2>
//           <p className="text-lg mb-4">
//             A task management app to help users keep track of their daily tasks and to-do lists. Features include task categorization, priority setting, and due date reminders.
//           </p>
//           <p className="mb-4">
//             <strong>Technologies used:</strong> React, Firebase, Material-UI, JavaScript
//           </p>
//           <div className="flex justify-between">
//             <a href="https://your-task-app-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
//               View Project
//             </a>
//             <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
//               View Code (GitHub)
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Projects;
