import ElementGenerator from "./../../library/ElementGernerator";
function IsLoading() {
  return ElementGenerator({
    element: "div",
    id: "isLoading",
    className: "text-center",
    child: "Is Loading...",
  });
}

export default IsLoading;
