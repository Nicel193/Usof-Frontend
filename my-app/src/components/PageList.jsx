import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PageList = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPage, setSelectedPage] = useState(1);

  const totalPages = props.totalPages;
  const pagesOffset = 2;

  const updatePageList = (pageNumber) => {
    searchParams.set("page", pageNumber);
    setSearchParams(searchParams);
    setSelectedPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [selectedPage]);

  const renderPages = () => {
    const pages = [];
    const minPage = Math.max(1, selectedPage - pagesOffset);
    const maxPage = Math.min(totalPages, minPage + pagesOffset * 2);

    if (minPage > 1) {
      pages.push(
        <button className="page" key={1} onClick={() => updatePageList(1)}>
          <span>1</span>
        </button>
      );
      if (minPage > 2) {
        pages.push(
          <button className="page" key="ellipsis1">
            <span>...</span>
          </button>
        );
      }
    }

    for (let i = minPage; i <= maxPage; i++) {
      pages.push(
        <button
          className={`${selectedPage === i ? "selected" : "page"}`}
          key={i}
          onClick={() => updatePageList(i)}
        >
          <span>{i}</span>
        </button>
      );
    }

    if (maxPage < totalPages) {
      if (maxPage < totalPages - 1) {
        pages.push(
          <button className="page" key="ellipsis2">
            <span>...</span>
          </button>
        );
      }
      pages.push(
        <button
          className="page"
          key={totalPages}
          onClick={() => updatePageList(totalPages)}
        >
          <span>{totalPages}</span>
        </button>
      );
    }

    return pages;
  };

  return <div className="pageList">{renderPages()}</div>;
};

export default PageList;
