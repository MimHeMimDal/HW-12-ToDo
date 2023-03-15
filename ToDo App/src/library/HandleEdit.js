import EditModal from "./../components/EditModal/index";
import GetData from "./GetData";

function HandleEdit(e) {
  const trID = e.target.closest("tr").getAttribute("id");
  console.log(trID);
  GetData(`http://localhost:3000/all?id=${trID}`).then((data) =>
    document.body.append(EditModal(data[0]))
  );
  // const itemForEdit = JSON.parse(localStorage.getItem("state")).filter(
  //   (item) => item.id === trID
  // );
  // document.body.append(EditModal(itemForEdit[0]));
}

export default HandleEdit;
