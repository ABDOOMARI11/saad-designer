import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "30%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="flex flex-col items-center w-full">
      <p className={`text-2xl font-semibold ${buttonClasses} hover:text-white`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 w-[80px]"
      ></motion.div>
    </button>
  );
};

export default TabButton;
