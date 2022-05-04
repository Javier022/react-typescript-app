import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="w-11/12 h-24  mx-auto px-8 grid grid-flow-col items-center justify-between">
        <p className="font-bold text-xl">
          <Link to="/">VideoApp</Link>
        </p>
        <ul className="grid grid-flow-col gap-4">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/create-video">Create video</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
