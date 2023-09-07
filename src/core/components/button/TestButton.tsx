import * as React from "react";
import { Button } from "./Button";

const TestButton: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Button Examples</h1>
      <Button variant={"secondary"}>Button TEST</Button>
    </div>
  );
};

export default TestButton;
