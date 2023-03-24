// src/components/Nav.tsx
import React from "react";

const Nav: React.FC = () => {
  return (
    <nav className="bg-emerald-400 p-4 fixed top-0 w-full">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://www.kobotoolbox.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              KoboToolbox
            </a>
          </li>
          <li>
            <a
              href="https://support.kobotoolbox.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              KoboToolbox Docs & Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
