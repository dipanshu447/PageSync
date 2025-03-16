var oldBook_CurrentPage = document.getElementById("old_current-page");
var oldBook_TotalPage = document.getElementById("old_total-page");
var newBook_Total = document.getElementById("newBook");
var submitBtn = document.getElementById("submit");

let calculateCurrentPag = (oldbook_currentPage, oldbook_TotalPage, newBook_TotalPage) => {
    return Math.round((oldbook_currentPage/oldbook_TotalPage) * newBook_TotalPage);
}
var resultEle = document.getElementById("result");
submitBtn.addEventListener("click",() => {
    let result = calculateCurrentPag(oldBook_CurrentPage.value,oldBook_TotalPage.value,newBook_Total.value);
    if (isNaN(result)) {
        resultEle.innerText = "New Book's Current Page: " + 0 + " pages";
    }else {

        resultEle.innerText = "New Book's Current Page: " + result + " pages";
    }
})



