import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;