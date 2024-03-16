import React from "react";
import Pagination from 'react-bootstrap/Pagination';

function PaginationCard({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPaginationItems = () => {
    const items = [];

    // Render the first page
    items.push(
      <Pagination.First key="first" onClick={() => handlePageChange(1)} />
    );

    // Render the previous page
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
      />
    );

    // Render page numbers around the current page
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // Render the next page
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
      />
    );

    // Render the last page
    items.push(
      <Pagination.Last
        key="last"
        onClick={() => handlePageChange(totalPages)}
      />
    );

    return items;
  };

  return (
    <Pagination>{renderPaginationItems()}</Pagination>
  );
}

export default PaginationCard;
