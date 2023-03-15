import RenderTable from "./RenderTable";
function HandlePageNumbers(e) {
  const totalPageNumber =
    document.getElementById("totalPageNumber").textContent;
  const pageSelect = document.getElementById("pageSelect");
  const currentPage = document.getElementById("pageNumber");
  if (pageSelect.value !== "All") {
    if (e.target.dataset.action === "prev") {
      if (+currentPage.textContent > 0) {
        if (+currentPage.textContent > 1)
          currentPage.textContent = +currentPage.textContent - 1;
        fetch(
          `http://localhost:3000/all?_page=${currentPage.textContent}&_limit=${pageSelect.value}`
        )
          .then((res) => res.json())
          .then((data) => RenderTable(data));
      }
    }
    if (e.target.dataset.action === "next") {
      if (
        +currentPage.textContent > 0 &&
        +currentPage.textContent < totalPageNumber
      ) {
        if (+currentPage.textContent < totalPageNumber)
          currentPage.textContent = +currentPage.textContent + 1;
        fetch(
          `http://localhost:3000/all?_page=${currentPage.textContent}&_limit=${pageSelect.value}`
        )
          .then((res) => res.json())
          .then((data) => RenderTable(data));
      }
    }
  }
}

export default HandlePageNumbers;
