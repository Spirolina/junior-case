import React from "react";

export default function Country({
  country,
  selectedCountry,
  setSelectedCountry,
  color,
}: any) {
  return (
    <div className="w-[240px] mb-2 ">
      <div
        onClick={() => setSelectedCountry(country.code)}
        className={`flex gap-4 ${
          selectedCountry === country.code
            ? color
            : "bg-black hover:bg-gray-800"
        } text-white p-4 mt-2 rounded-lg shadow-lg h-[160px] overflow-visible hover:cursor-pointer  transition`}
      >
        <div className="flex flex-col w-full">
          <div className="flex w-full font-bold">
            {country.name} ({country.code})
            <div className="ml-auto">{country.emoji}</div>
          </div>
          <div>Continent: {country.continent.name}</div>
          <div>Currency: {country.currency}</div>

          <div>
            Languages:{" "}
            {country.languages.map((lang: any) => lang.name).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
