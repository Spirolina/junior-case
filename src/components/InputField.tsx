import React from "react";

export default function InputField({ value, onChange, label }: any) {
  return (
    <div className="flex flex-col w-[256px]">
      <label className="mb-1 ml-1 font-bold">{label}</label>
      <input
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
        className="p-3 bg-black text-white rounded-xl shadow-lg"
      />
    </div>
  );
}
