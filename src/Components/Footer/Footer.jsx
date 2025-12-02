// import React from "react";
// // import { Link } from 'react-router-dom';
// import { FaTwitter, FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
// import { Link } from "react-router";

// const Footer = () => {
//   return (
//     <div className="w-11/12 mx-auto">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/*  About Section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">About Us</h3>
//             <p className="text-sm">
//               GameHub is a platform dedicated to discovering and supporting
//                game developers. Explore a variety of games, read
//               detailed descriptions, and easily install your favorites. Join a
//               community of passionate gamers and developers, and help bring
//               fresh, creative games to the world!
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div>
            
//             <div className="flex flex-col items-start md:items-center lg:items-center">
//               <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
//               <ul>
//               <li>
//                 <Link to="/" className="text-sm hover:text-gray-400">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/allGames" className="text-sm hover:text-gray-400">
//                   Games
//                 </Link>
//               </li>
//             </ul>
//             </div>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebookF className="text-2xl hover:text-blue-600 transition-colors" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram className="text-2xl hover:text-pink-400 transition-colors" />
//               </a>
//               <a
//                 href="https://discord.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaDiscord className="text-2xl hover:text-indigo-500 transition-colors" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-8 text-center text-sm">
//           <p>&copy; 2025 GameHub. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              GameHub is a platform dedicated to discovering and supporting game developers.
              Explore games, read descriptions, and join a passionate gamer community.
            </p>
          </div>

          {/* Modified Quick Links Section (Two Columns) */}
          <div className="flex flex-col items-start md:items-center lg:items-center">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mt-3">

              <Link to="/" className="text-sm hover:text-gray-400 transition">
                Home
              </Link>

              <Link to="/allGames" className="text-sm hover:text-gray-400 transition">
                All Games
              </Link>

              <Link to="/about" className="text-sm hover:text-gray-400 transition">
                About Us
              </Link>

              <Link to="/contact" className="text-sm hover:text-gray-400 transition">
                Contact
              </Link>

              <Link to="/support" className="text-sm hover:text-gray-400 transition">
                Support
              </Link>

            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-2xl hover:text-indigo-500 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 GameHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
