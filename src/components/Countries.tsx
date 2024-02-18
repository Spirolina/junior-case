import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import InputField from "./InputField";
import SelectBox from "./SelectBox";
import Country from "./Country";

const COUNTRIES = gql`
  query Query {
    countries {
      code
      continent {
        name
      }
      emoji
      currency
      languages {
        name
      }
      name
    }
  }
`;

const options = [
  { value: "currency", label: "Currency" },
  { value: "continent", label: "Continent" },
];

const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
  "bg-gray-400",
];

export default function Countries() {
  const { loading, error, data } = useQuery(COUNTRIES);
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("continent");
  const [countries, setCountries] = useState<any>([]);
  const [currGroups, setCurrGroups] = useState<any>([]);
  const [contGroups, setContGroups] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [color, setColor] = useState(0);

  useEffect(() => {
    if (data) {
      let myCountries = data.countries;
      myCountries = myCountries.filter((country: any) =>
        country.name.toLowerCase().includes(search.toLowerCase()),
      );
      myCountries = myCountries.slice(0, 10);

      let conts = myCountries.map((country: any) => country.continent.name);
      const contsSet = new Set(conts);

      let currs = myCountries.map((country: any) => country.currency);
      const currsSet = new Set(currs);

      setCountries(myCountries);
      setCurrGroups(currsSet);
      setContGroups(contsSet);
      setSelectedCountry(myCountries[myCountries.length - 1].code);
    }
  }, [search, data, group]);

  useEffect(() => {
    setColor((prev) => (prev + 1) % colors.length);
  }, [selectedCountry]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div className="flex justify-between w-[900px] mb-3">
        <InputField
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          label="Search"
        />
        <SelectBox
          options={options}
          value={group}
          onSelect={(e: any) => setGroup(e.target.value)}
        />
      </div>
      <div className="flex w-[900px] flex-wrap justify-between">
        {group === "currency" &&
          currGroups.size > 0 &&
          Array.from(currGroups).map((curr: any) => {
            return (
              <div
                className="bg-white m-2 p-3 rounded-lg shadow-xl h-fit"
                key={curr}
              >
                {" "}
                {curr}
                {countries
                  .filter((country: any) => country.currency === curr)
                  .map((country: any) => (
                    <Country
                      key={country.code}
                      country={country}
                      color={colors[color]}
                      setSelectedCountry={setSelectedCountry}
                      selectedCountry={selectedCountry}
                    />
                  ))}
              </div>
            );
          })}

        {group === "continent" &&
          contGroups.size > 0 &&
          Array.from(contGroups).map((cont: any) => {
            return (
              <div
                className="bg-white m-2 p-3 rounded-lg shadow-xl h-fit"
                key={cont}
              >
                {cont}
                {countries
                  .filter((country: any) => country.continent.name === cont)
                  .map((country: any) => (
                    <Country
                      key={country.code}
                      color={colors[color]}
                      country={country}
                      setSelectedCountry={setSelectedCountry}
                      selectedCountry={selectedCountry}
                    />
                  ))}
              </div>
            );
          })}
      </div>
    </div>
  );
}
