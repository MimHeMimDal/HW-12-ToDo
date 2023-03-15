import EditModal from "./../components/EditModal/index";
import GetData from "./GetData";

function HandleShow(e) {
  const trID = e.target.closest("tr").getAttribute("id");

  // const itemForEdit = JSON.parse(localStorage.getItem("state")).filter(
  //   (item) => item.id === trID
  // );
  // const modal = EditModal(itemForEdit[0], "disabled");
  // document.body.append(modal);
  GetData(`http://localhost:3000/all?id=${trID}`).then((data) => {
    const modal = EditModal(data[0], "disabled");
    document.body.append(modal);
  });
}

export default HandleShow;
