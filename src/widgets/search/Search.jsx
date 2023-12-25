import React from "react";
import DefaultInput from "../../shared/inputs/default/DefaultInput";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <div className="search">
      <h3 className="search__title">Search</h3>
      <DefaultInput
        text={"Search our store"}
        type={"text"}
        icon={<LuSearch className="search__icon"/>}
      />
    </div>
  );
};

export default Search;
