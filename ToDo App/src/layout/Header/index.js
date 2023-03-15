import ElementGenerator from "./../../Library/ElementGernerator";
import InputContainer from "./../../components/Input-Container";
import Button from "./../../components/Button/index";
import RenderTable from "./../../library/RenderTable";
import { debounce } from "lodash";
import GetData from "./../../library/GetData";
import { handlePageSelect } from "@/components/PageinationContainer";

function Header() {
  return ElementGenerator({
    element: "header",
    className:
      "flex justify-between items-center bg-purple-700 px-4 py-2 text-white",
    child: [
      ElementGenerator({
        element: "div",
        className: "flex items-center gap-2",
        child: [
          ElementGenerator({
            element: "ion-icon",
            name: "list-outline",
            className: "text-2xl",
          }),
          ElementGenerator({ element: "div", child: "My To-Do Tasks" }),
        ],
      }),
      ElementGenerator({
        element: "div",
        className: "flex items-center gap-4",
        child: [
          InputContainer({
            id: "searchInput",
            type: "text",
            parentClass: "flex bg-purple-600 items-center gap-2 px-2 rounded",
            className: "bg-inherit  focus:outline-0",
            placeholder: "Search",
            labelChild: ElementGenerator({
              element: "ion-icon",
              name: "search",
              className: "text-xl",
            }),
            onkeyup: debounce((e) => {
              e.target.value === ""
                ? handlePageSelect()
                : GetData("http://localhost:3000/all").then((data) => {
                    const fliteredData = data.filter((item) =>
                      item.taskNameInput
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    );
                    RenderTable(fliteredData);
                  });
            }, 700),
          }),
          Button({
            className: "flex items-center",
            id: "filterBtn",
            child: ElementGenerator({
              element: "ion-icon",
              name: "funnel",
              className: "text-2xl",
              onclick: (e) => {
                document.getElementById("asideContainer").hidden =
                  !document.getElementById("asideContainer").hidden;
              },
            }),
          }),
          Button({
            className: "bg-white rounded flex items-center",
            id: "addButton",
            child: ElementGenerator({
              element: "ion-icon",
              name: "add",
              className: "text-2xl text-purple-700",
              onclick: (e) => {
                document.getElementById("add-modal").hidden =
                  !document.getElementById("add-modal").hidden;
              },
            }),
          }),
        ],
      }),
    ],
  });
}

export default Header;
