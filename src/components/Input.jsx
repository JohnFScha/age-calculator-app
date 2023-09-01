import React from "react";

const Input = ({ reference, min, max, placeholder, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm mobile:text-xs font-semibold mb-2 mobile:ml-1 mobile:mb-1">
        {name.toUpperCase()}
      </label>
      <input
        type="number"
        name={name}
        ref={reference}
        min={min}
        max={max}
        className="rounded-lg border-2 px-2 py-1 placeholder:font-bold mobile:text-xl mobile:p-2 mobile:m-1"
        placeholder={placeholder}
        required
      />
      <span className="hidden">can't be a future date</span>
    </div>
  );
};

export default Input;
