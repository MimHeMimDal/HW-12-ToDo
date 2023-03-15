import RenderTable from "./RenderTable";

async function HandleDelete(e) {
  const trID = e.target.closest("tr").getAttribute("id");
  console.log(trID);
  // const newState = JSON.parse(localStorage.getItem("state")).filter(
  //   (item) => item.id !== trID
  // );
  // localStorage.setItem("state", JSON.stringify(newState));
  // RenderTable(JSON.parse(localStorage.getItem("state")));
  await fetch(`http://localhost:3000/all/${trID}`, {
    method: "DELETE",
  });
console.log("test");
  await fetch("http://localhost:3000/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => RenderTable(data));
}

export default HandleDelete;
