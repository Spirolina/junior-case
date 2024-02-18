import React from "react";

export default function SelectBox({ options, value, onSelect }: any) {
  return (
    <div className="flex flex-col">
      <label className="font-bold mb-1" htmlFor="attributes">
        {" "}
        Group{" "}
      </label>
      <select
        className="p-3 rounded-lg bg-black text-white "
        name="attributes"
        id="attributes"
        value={value}
        onChange={onSelect}
      >
        {options.map((option: any) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
