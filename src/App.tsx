// import { useState } from "react";
import Nav from "./Nav";
// import Sorter from "./Sorter";
import Template from "./Template";
function App() {
  const forms = [
    {
      inputType: "text",
      name: "first name",
      initialValue: "",
    },
    {
      inputType: "text",
      name: "last name",
      initialValue: "",
    },
    {
      inputType: "text",
      name: "email",
      initialValue: "",
    },
    {
      inputType: "text",
      name: "password",
      initialValue: "",
    },
    {
      inputType: "checkbox",
      name: "gender",
      initialValue: "male",
    },
    {
      inputType: "checkbox",
      name: "gender",
      initialValue: "female",
    },
  ];
  // const [products] = useState([
  //   {
  //     name: "Apple",
  //     qty: 100,
  //     availability: true,
  //     price: 10,
  //     type: "Green",
  //   },
  //   {
  //     name: "Apple",
  //     qty: 0,
  //     availability: false,
  //     price: 13,
  //     type: "Red",
  //   },
  //   {
  //     name: "Grape",
  //     qty: 63,
  //     availability: false,
  //     price: 20,
  //   },
  //   {
  //     name: "Pineapple",
  //     qty: 0,
  //     availability: true,
  //     price: 100,
  //   },
  // ]);
  return (
    <>
      <Nav />
      {/* <Sorter stock={products} productsCategory="Fruits" factor="name" /> */}
      <div className="relative px-52  max-sm:px-0">
        <Template form={forms} title="Sign up" />
      </div>
    </>
  );
}

export default App;
