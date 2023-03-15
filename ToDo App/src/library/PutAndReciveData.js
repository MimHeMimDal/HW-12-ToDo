import { handlePageSelect } from "@/components/PageinationContainer";

// import RenderTable from "./RenderTable";
async function PutAndRecivetData(obj, id) {
  await fetch(`http://localhost:3000/all/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  await handlePageSelect();
  // await fetch("http://localhost:3000/all")
  //   .then((response) => response.json())
  //   .then((data) => RenderTable(data));
}

export default PutAndRecivetData;
