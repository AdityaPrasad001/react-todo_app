import React from "react";

const Button = ({ children, bgColor, textColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        textTransform: "uppercase",
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        margin: "1rem",
        width: "80%",
        height: "3rem",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

export default Button;
