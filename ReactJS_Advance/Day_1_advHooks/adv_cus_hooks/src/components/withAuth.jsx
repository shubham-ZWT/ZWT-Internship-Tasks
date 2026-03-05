import React from "react";

export default function withAuth(Component) {
  return (props) => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <div>Please Login to access</div>;
    }
    return <Component {...props} />;
  };
}
