import { useState } from "react";

export function usePagination(data, resultsPerPage) {
  const [page, setPage] = useState(1);

  const handlePageChange = (goToPage) => {
    setPage(goToPage);
  };

  const totalPages = Math.ceil(data.length / resultsPerPage);
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage - 1; // Adjusted for 0-based indexing
  const paginatedResults = data.slice(start, end + 1); // +1 to include the end index

  const showPagination = data.length > 0; // Determine if there are recipes to show

  return {
    page,
    setPage,
    totalPages,
    handlePageChange,
    paginatedResults,
    showPagination,
  };
}
