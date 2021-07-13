import React from 'react'

export const Pagination = ({ paginate, postsPerPage, totalPosts }) => {
  const pageNumbers = [];
  const totalNumPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalNumPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber} className="page-item">
            <a onClick={() => paginate(pageNumber)} className="page-link" href="!#">{pageNumber}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
