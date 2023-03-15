import "./src/styles/index.css";
import App from "./src/App";
import RenderTable from "./src/library/RenderTable";
import GetData from "./src/library/GetData";
// import IsLoading from "./src/components/IsLoading/index";

document.body.appendChild(App());
// RenderTable(JSON.parse(localStorage.getItem("state")));
GetData("http://localhost:3000/all").then((data) => {
  // console.log(document.getElementById("isLoading"));
  document.getElementById("isLoading").hidden =
    !document.getElementById("isLoading").hidden;
  RenderTable(data);
});
//   .finally(() => {
//     document.getElementById("isLoading").hidden =
//       !document.getElementById("isLoading").hidden;
//   });
