import React from "react";

import Button from "../../shared/components/UIElements/Button";

const Pagination = (props) => {
  const { itemsPerPage, totalItems, paginate, currPage } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => paginate(currPage + 1);
  const prevPage = () => paginate(currPage - 1);

  return (
    <div>
      <Button disabled={currPage === 1} inverse noborder onClick={prevPage}>
        <i className="fas fa-angle-double-left"></i>
      </Button>
      <span>
        Page {currPage} / {totalPages}
      </span>
      <Button
        disabled={currPage === totalPages}
        inverse
        noborder
        onClick={nextPage}
      >
        <i className="fas fa-angle-double-right"></i>
      </Button>
    </div>
  );
};

export default Pagination;
