import React from "react";

/**
 * @param {React.Component} Component
 * @returns {React.FC}
 */
export const notifyOnRender = Component => props => {
  console.log("Parent wants to render", Component.name);
  return <Component {...props} />;
};
