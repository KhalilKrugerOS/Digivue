import React from "react";

const Header = () => {
  return (
    <div className="h-min w-full text-3xl text-blue-600 font-bold text-center px-3 py-4 m-10 flex flex-col items-center">
      <h1 className="head_text indigo_gradient">Admin Dashboard</h1>
      <p className="desc text-center">Monitor your users and staff</p>
    </div>
  );
};

export default Header;
