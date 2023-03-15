import ElementGenerator from "./../../library/ElementGernerator";
import Table from "./../../components/Table/index";
import PageinationContainer from "./../../components/PageinationContainer/index";
import IsLoading from "./../../components/IsLoading/index";

function Main() {
  return ElementGenerator({
    element: "div",
    className: "px-4 py-3 flex flex-col justify-between h-[300px]",
    child: [Table(), IsLoading(), PageinationContainer()],
  });
}
export default Main;
