import React from 'react';

const Paginate = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Paginate;