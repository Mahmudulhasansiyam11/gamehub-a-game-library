
import React, { useState, useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FcMenu } from "react-icons/fc";
import userImg from "../../assets/user.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // logout functionality
  const handleLogOut = () => {
    logOut()
      .then(() => toast("Logged Out Successfully"))
      .catch((error) => console.log(error.message));
  };

  const links = (
    <>
      <NavLink to="/" className="block px-3 py-2 rounded hover:bg-white/10">
        Home
      </NavLink>
      <NavLink to="/allGames" className="block px-3 py-2 rounded hover:bg-white/10">
        All Games
      </NavLink>
      <NavLink to="/about" className="block px-3 py-2 rounded hover:bg-white/10">
        About Us
      </NavLink>
      <NavLink to="/contact" className="block px-3 py-2 rounded hover:bg-white/10">
        Contact
      </NavLink>
      <NavLink to="/support" className="block px-3 py-2 rounded hover:bg-white/10">
        Support
      </NavLink>
    </>
  );

  const links1 = (
    <>
      {links}
      <NavLink
        to="/feature"
        className="block px-3 py-2 rounded hover:bg-white/10"
      >
        Features
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#031637]/90 backdrop-blur-md shadow-lg text-white font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img className="w-20" src={logo} alt="Logo" />
            {user && (
              <span className="hidden sm:block">{user.displayName}</span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex gap-3">{user ? links1 : links}</div>

            <div className="flex gap-3">
              {user ? (
                <>
                  <Link
                    to="/myProfile"
                    className="transition-transform transform hover:scale-105"
                  >
                    {user?.photoURL ? (
                      <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="Profile" />
                    ) : (
                      <img className="w-10 h-10 rounded-full object-cover" src={userImg} alt="Profile" />
                    )}
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white tracking-wide transition-transform transform hover:scale-105"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/auth/login"
                    className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white tracking-wide transition-transform transform hover:scale-105"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white tracking-wide transition-transform transform hover:scale-105"
                  >
                    Registration
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <FcMenu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-[#031637] shadow-xl">
          <div className="flex flex-col gap-2">{user ? links1 : links}</div>

          <div className="flex flex-col gap-2 mt-3">
            {user ? (
              <>
                <Link to="/myProfile" className="flex items-center gap-3">
                  {user?.photoURL ? (
                    <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} />
                  ) : (
                    <img className="w-10 h-10 rounded-full object-cover" src={userImg} />
                  )}
                </Link>

                <button
                  onClick={handleLogOut}
                  className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white tracking-wide transition-transform transform hover:scale-105"
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white tracking-wide transition-transform transform hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white tracking-wide transition-transform transform hover:scale-105"
                >
                  Registration
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
