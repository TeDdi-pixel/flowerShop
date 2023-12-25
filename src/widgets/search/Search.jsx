import React from "react";
import DefaultInput from "../../shared/inputs/default/DefaultInput";
import { LuSearch } from "react-icons/lu";
import PageTitle from "../../shared/pageTitle/PageTitle";

const Search = () => {
  return (
    <div className="search">
      <PageTitle title={'Search'}/>
      <DefaultInput
        text={"Search our store"}
        type={"text"}
        icon={<LuSearch className="search__icon"/>}
      />
    </div>
  );
};

export default Search;
