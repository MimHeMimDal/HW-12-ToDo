async function GetData(url) {
  // return fetch("http://localhost:3000/all").then((response) => response.json());
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}

// async function GetData2(url) {
//   // return fetch("http://localhost:3000/all").then((response) => response.json());
//   return fetch(`${url}`);
// }
// GetData2("http://localhost:3000/all?_page=2&_limit=5").then((res) => {
//   const head = res.headers;
//   console.log(head.get("Link"));
//   console.log(res.json().then((data) => console.log(data)));
// });
export default GetData;

// const regex = /_page=(\d+)/;
// const url = "http://localhost:3000/all?_page=2&_limit=3";
// const match = url.match(regex);
// if (match) {
//   const pageNumber = match[1];
//   console.log(pageNumber); // Output: 2
// }

// const head = res.headers;
// console.log(head.get("Link"));
