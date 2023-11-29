import "./Header.scss";
import React from "react";
import { UilChannel } from "@iconscout/react-unicons";
import { useSearchParams } from "react-router-dom";

const Category = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = props;

  function findByCategory() {
    setSearchParams({ category: id  }); 
  }

  return (
    <div onClick={findByCategory} className="flex-center category chose">
      <UilChannel size="32" color="#505f98" />
      <span>{props.title}</span>
    </div>
  );
};

export default Category;
