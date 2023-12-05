import React from "react";
import { UilChannel } from "@iconscout/react-unicons";
import { useSearchParams } from "react-router-dom";

const Category = ({ id, title, isActiveButton, setButtonId, buttonId }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function findByCategory() {
    setSearchParams({ category: id });
    setButtonId(buttonId);
  }

  return (
    <div
      onClick={findByCategory}
      className={`text-link flex-center home ${isActiveButton(buttonId)}`}
    >
      <UilChannel size="32" color="#505f98" />
      <span>{title}</span>
    </div>
  );
};

export default Category;
