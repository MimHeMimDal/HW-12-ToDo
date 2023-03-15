// import RenderTable from "./RenderTable";
async function PosAndRecivetData(obj) {
  await fetch("http://localhost:3000/all", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  // await fetch("http://localhost:3000/all")
  //   .then((response) => response.json())
  //   .then((data) => RenderTable(data));
}

export default PosAndRecivetData;
