import { Link } from "react-router-dom";

function Pagination({ totalPages, curPage, handlePageChange }) {
  const renderPageLinks = () => {
    const pageLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <Link
          key={i}
          className={`pagination__page-link ${
            curPage === i ? "pagination__page-link--current" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Link>
      );
    }
    return pageLinks;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(curPage - 1)}
        className="pagination__btn"
        disabled={curPage === 1}
      >
        <i className="pagination__btn--icon icon fa-solid fa-chevron-left"></i>
        <span className="pagination__prev-text">prev</span>
      </button>

      {renderPageLinks()}

      <button
        onClick={() => handlePageChange(curPage + 1)}
        className="pagination__btn"
        disabled={curPage === totalPages}
      >
        <span className="pagination__prev-text">next</span>
        <i className="pagination__btn--icon fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
