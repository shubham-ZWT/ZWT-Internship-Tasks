import React from "react";

export default function withLoading(Component) {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Data is Loading</div>;
    }

    return <Component {...props} />;
  };
}
