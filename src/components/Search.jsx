import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { callAPI } from "../utils/CallAPI";
import { useNavigate, createSearchParams } from "react-router-dom";
const Search = () => {
  const [suggestion, setSuggestion] = useState([]);
  const [searchTerm, setSearch] = useState("");
  const [category, setCat] = useState("All");
  const navigate = useNavigate();
  const onHandelSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });
    setSearch("");
    setCat("All");
  };
  const gertSuggestions = () => {
    callAPI("data/suggestions.json").then((res) => setSuggestion(res.data));
  };
  useEffect(() => {
    gertSuggestions();
  }, []);
  return (
    <div className="w-[100%] ">
      <div className="flex items-center h-10 bg-amazon-yellow rounded">
        <select
          onChange={(e) => {
            setCat(e.target.value);
            console.log(e.target.value);
          }}
          title="select"
          className="p-2 bg-gray-300 text-black text-xs xl:text-sm h-[100%] outline-none pr:p-0 pr:w-[35px]"
        >
          <option value="All">All</option>
          <option value="Deals">Deals</option>
          <option value="Amazon">Amazon</option>
          <option value="Fashion">Fashion</option>
          <option value="Computers">Computers</option>
          <option value="Home">Home</option>
          <option value="Mobile">Mobile</option>
        </select>
        <input
          className="text-black rounded-l h-[100%] grow outline-none flex items-center pl-5 pr:p-1"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={onHandelSubmit}
          title="button"
          type=""
          className="w-[30px]"
        >
          <MagnifyingGlassIcon
            className="h-[27px] m-auto stroke-slate-900"
            type="text"
          />
        </button>
        <div>
          {suggestion && (
            <div className=" text-white bg-amazon z-40 divide-y-2 absolute left-[50%] translate-x-[-50%] w-full mt-[20px]">
              {suggestion
                .filter((suggest) => {
                  const currentSearch = searchTerm.toLocaleLowerCase();
                  const title = suggest.title.toLowerCase();
                  return (
                    currentSearch &&
                    title.includes(currentSearch) &&
                    title !== currentSearch
                  );
                })
                .slice(0, 4)
                .map((suggest) => (
                  <div
                    onClick={() => setSearch(suggest.title)}
                    className="p-4 cursor-pointer"
                    key={suggest.id}
                  >
                    {suggest.title}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
