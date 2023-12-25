import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import Search from "../../widgets/search/Search";
import Path from "../../shared/path/Path";

const SearchPage = () => {
  return (
    <DefaultLayout>
      <Path />
      <Search />    
    </DefaultLayout>
  );
};

export default SearchPage;
