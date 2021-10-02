import React from "react";
//import styled from "styled-components";


const Button = ({ className, children, ...props }: any) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

// const BaseButton = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
// `;

// const ButtonText = styled.text`
//   font-size: 12px;
// `;


export default Button;