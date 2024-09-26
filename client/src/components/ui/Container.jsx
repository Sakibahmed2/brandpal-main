import cn from "@/libs/cn";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-[1230px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
