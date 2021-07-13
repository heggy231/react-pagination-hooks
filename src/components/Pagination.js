import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const numOfTotalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= numOfTotalPages; i++) {
    // i => page number
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map(pageNumber => (
        <li key={pageNumber} className="page-item">
          <a onClick={ () => paginate(pageNumber) } className="page-link" href="!#">{pageNumber}</a>
        </li>
      ))}
    </div>
  )
}
