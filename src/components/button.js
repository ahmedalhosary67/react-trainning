import React from "react";

export const Button = React.memo(({ label, countfn, disabled = false }) => {
  return (
    <button
      onClick={countfn}
      className="btn btn-secondary mr-2 btn-sm"
      disabled={disabled}
    >
      {label}
    </button>
  );
});
