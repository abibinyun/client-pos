import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ children, ...props }) => {
  return (
    <div>
      <Button variant="primary" {...props}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonComponent;
