import React, { useEffect, useState } from "react";
import Classes from "/styles/pagination.module.css";
const Paginationbar = ({
  postsPerPage,
  totalPosts,
  onPageClick,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(5 / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getNumber = (num) => {

    return num;
  };
  console.log(postsPerPage, totalPosts, currentPage);
  return (
    <div className={Classes["pagination-container"]}>
      <ul className={Classes["pagination"]}>
        {pageNumbers.map((number) => {
          return number > 3 && number < 10 ? (
            <li className={Classes["page-number"]} key={number}>...</li>
          ) : (
            <li
              key={number}
              className={`${Classes["page-number"]} ${
                currentPage == number ? Classes["active"] : ""
              }`}
              onClick={() => onPageClick(number)}
            >
              {getNumber(number)}
            </li>
          );
        })}
        {pageNumbers.length > 10 && (
          <li className={`${Classes["page-number"]} ${Classes["last-li"]}`}>
            Older
          </li>
        )}
      </ul>
    </div>
  );
};

export default Paginationbar;
