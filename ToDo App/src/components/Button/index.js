import ElementGenerator from "./../../library/ElementGernerator";

function Button({ dataSet, ...rest }) {
  const btn = ElementGenerator({ element: "button", ...rest });
  if (dataSet) btn.dataset.action = dataSet;
  return btn;
}

export default Button;
