import ElementGenerator from "./../../library/ElementGernerator";
import Button from "./../Button/index";
import GetData from "./../../library/GetData";
import RenderTable from "./../../library/RenderTable";
import HandlePageNumbers from "./../../library/HandlePageNumber";

export async function handlePageSelect() {
  const pageSelect = document.getElementById("pageSelect");
  if (pageSelect.value !== "All") {
    document.getElementById("pageNumber").textContent = 1;
    await GetData(
      `http://localhost:3000/all?_page=1&_limit=${pageSelect.value}`
    ).then((data) => {
      RenderTable(data);
    });
    fetch(`http://localhost:3000/all?_page=1&_limit=${pageSelect.value}`).then(
      (res) => {
        const last = res.headers.get("Link").split(",").at(-1);
        const regex = /_page=(\d+)/;
        const match = last.match(regex);
        document.getElementById("totalPageNumber").textContent = match[1];
        // console.log(res.headers.get("Link"));
        // console.log(match[1]);
      }
    );
  } else {
    await GetData("http://localhost:3000/all").then((data) => {
      document.getElementById("totalPageNumber").textContent = 1;
      RenderTable(data);
    });
  }
}

function PageinationContainer() {
  return ElementGenerator({
    element: "div",
    className: "flex justify-end items-center gap-3 mt-6 mr-5",
    child: [
      ElementGenerator({ element: "div", child: "Rows per page:" }),
      ElementGenerator({
        element: "select",
        id: "pageSelect",
        onchange: handlePageSelect,
        className: "border w-16",
        child: [
          ElementGenerator({
            element: "option",
            child: "All",
            name: "All",
            value: "All",
          }),
          ElementGenerator({
            element: "option",
            child: "5",
            name: "5",
            value: "5",
          }),
          ElementGenerator({
            element: "option",
            child: "10",
            name: "10",
            value: "10",
          }),
        ],
      }),
      Button({ child: "Prev", dataSet: "prev", onclick: HandlePageNumbers }),
      ElementGenerator({ element: "div", id: "pageNumber", child: "1" }),
      ElementGenerator({ element: "div", child: "of" }),
      ElementGenerator({ element: "div", id: "totalPageNumber", child: "1" }),
      Button({ child: "Next", dataSet: "next", onclick: HandlePageNumbers }),
    ],
  });
}

export default PageinationContainer;
