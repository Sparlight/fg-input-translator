import React from "react";
import { useInput } from "../contexts/InputContext";

export const Output = () => {
  const { output } = useInput();

  if (output.length > 0)
    return (
      <div className="flex flex-wrap items-center justify-center gap-y-2 rounded-lg p-2 outline outline-1 outline-neutral-700">
        {output}
      </div>
    );
};
