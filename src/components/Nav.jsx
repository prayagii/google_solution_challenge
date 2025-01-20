import React from "react";
import { Link } from "react-router-dom";
import { RiNotificationFill } from "react-icons/ri";
const Nav = () => {
  return (
    <nav className="px-[4.4rem] fixed w-full py-4  flex items-center justify-between">
      <Link to='/' className="text-xl font-semibold">NeuroConnect</Link>
      <div className="flex items-center gap-12">
        <Link to="/community">Online Community</Link>
        <Link to="/job">Job Search</Link>
        <Link to="/mentorship">Mentorship</Link>
        <div className="flex items-center gap-10 ml-[4vw]">
          <Link
            to="/notification"
            className="h-8 w-8 rounded-full flex items-center justify-center overflow-hidden"
          >
            <RiNotificationFill size={21} />
          </Link>
          <Link
            to="/profile"
            className="h-8 w-8 rounded-full overflow-hidden "
          >
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/a/ACg8ocKsOVls62ud6g3UzYN22GSg6FmVcbbAjIVevxGkmkKAJ7ed-EE=s96-c"
              alt=""
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
