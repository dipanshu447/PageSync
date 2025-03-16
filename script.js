let calculateCurrentPag = (oldbook_currentPage, oldbook_TotalPage, newBook_TotalPage) => {
    return Math.round((oldbook_currentPage/oldbook_TotalPage) * newBook_TotalPage);
}
