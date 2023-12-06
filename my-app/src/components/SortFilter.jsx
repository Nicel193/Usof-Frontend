import React from "react";
import "./styles/SortFilter.scss";
import { useSearchParams } from "react-router-dom";

const SortFilter = ({ selectedLikeType, setLike, grade }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function sortByDate(order) {
    searchParams.set("sort", "date");
    searchParams.set("order", order);
    setSearchParams(searchParams);
  }

  function sortByLikes(order) {
    searchParams.set("sort", "likes");
    searchParams.set("order", order);
    setSearchParams(searchParams);
  }

  return (
    <div className="sort-filter">
      <button onClick={() => sortByDate("DESC")}>New</button>
      <button onClick={() => sortByDate("ASC")}>Old</button>
      <button onClick={() => sortByLikes("DESC")}>Popular</button>
      <button onClick={() => sortByLikes("ASC")}>Unpopular</button>
    </div>
  );
};

export default SortFilter;
