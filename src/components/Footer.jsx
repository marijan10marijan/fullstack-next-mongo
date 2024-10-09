import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 w-full bg-gray-200 border-t border-gray-400 shadow-md flex items-center justify-center">
      <p className="text-sm font-semibold">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
