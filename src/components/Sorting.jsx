import { useState } from "react";

export default function Sorting({ onSort }) {
  const [sort, setSort] = useState("");
  // console.log(sort);
  const handleChange = () => {
    onSort(sort);
    setSort(event.target.value);
  };

  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
        value={sort}
        // onChange={() => setSort(event.target.value)}
        onChange={handleChange}
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
}
