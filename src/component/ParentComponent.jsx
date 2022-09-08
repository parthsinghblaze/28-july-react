import React from "react";

function ParentComponent({ children }) {
  return (
    <>
      <h2>Parent Component</h2>
      {children}
    </>
  );
}

export default ParentComponent;
