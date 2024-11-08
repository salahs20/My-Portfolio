
import React from "react";
import myPhoto from "../../Image/IMG-202409281-WA00281.jpg";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "About", "Project", "CV", "Contact Us"].map((item) => (
        <Typography
          key={item}
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {item}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) setOpenNav(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-3xl px-6 py-3 fixed top-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="flex items-center mr-4">
          <img
            src={myPhoto}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;


// import React from "react";
// import myPhoto from "../../Image/IMG-202409281-WA00281.jpg";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";

// function NavList() {
//   return (
//     <ul className="my-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
//       {["Home", "About", "Project", "CV","Contact Us"].map((item) => (
//         <Typography
//           key={item}
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-medium"
//         >
         
//           <Link
//             to={item === "Home" ? "/" :`/${item.toLowerCase()}`}
//             className="flex items-center hover:text-blue-500 transition-colors"
//           >
//             {item}
//           </Link>
//         </Typography>
//       ))}
//     </ul>
//   );
// }

// const Header = () => {
//   const [openNav, setOpenNav] = React.useState(false);

//   const handleWindowResize = () => {
//     if (window.innerWidth >= 960) setOpenNav(false);
//   };

//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-screen-3xl px-6 py-3 fixed top-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md z-50">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Link to="/" className="flex items-center mr-4">
//           <img
//             src={myPhoto}
//             alt="Profile"
//             className="w-12 h-12 rounded-full border-2 border-blue-500"
//           />
//         </Link>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav} className="lg:hidden">
//         <NavList />
//       </Collapse>
//     </Navbar>
//   );
// };

// export default Header;







