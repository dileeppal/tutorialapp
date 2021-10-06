import React from "react";


const Button = ({ className, children, ...props }: any) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};




export default Button;