import React from "react";

const SelectLimit = ({ setLimit }: { setLimit: (limit: number) => void }) => {
  return (
    <select
      onChange={(e) => {
        setLimit(e.target.value as unknown as number);
      }}
      name="limit"
      className=" max-w-xs bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  );
};

export default SelectLimit;
