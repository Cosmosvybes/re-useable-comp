import { FilterThreeLineBig } from "react-huge-icons/outline";
import Product from "./Product";
import { useState } from "react";

interface Item {
  name: string;
  qty: number;
  availability: boolean;
  price: number;
  type?: string;
}
interface ProductInterface {
  factor: string;
  stock: Item[];
  productsCategory: string;
}

function Sorter({ stock, factor, productsCategory }: ProductInterface) {
  const [name, setName] = useState("Apple");

  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  
  const handleFiltering = () => {
    const options = document.querySelector("#fruits") as HTMLSelectElement;
    const filterFactor = options.value;
    setName(filterFactor);
  };
  let products = stock.filter((Product) => Product.name === name);
  const filteredProducts = () => {
    return factor === "name" ? (
      <div className="relative">
        <h1 className="text-4xl max-sm:3xl px-2">{productsCategory}</h1>
        <div className="flex justify-start items-center px-2 gap-2 py-1">
          <FilterThreeLineBig className="text-3xl  text-gray-400" />{" "}
          <select
            id="fruits"
            className="outline-gray-200 px-2 text-gray-600"
            onChange={handleFiltering}
          >
            <option>Apple</option>
            <option>Grape</option>
            <option>Pineapple</option>
            <option>Onion</option>
          </select>
          <div className="relative gap-2 items-center justify-start flex">
            <input
              type="checkbox"
              value={showAvailableOnly}
              onChange={(e) => {
                return setShowAvailableOnly(e.currentTarget.checked);
              }}
            />
            <p className="text-gray-400 text-xs">Available only</p>
          </div>
        </div>
        {products.filter((product) => product.name === name).length > 0 ? (
          <div className="relative grid grid-cols-2 gap-2 max-sm:grid-cols-1 max-sm:w-full">
            {products
              .filter((product) =>
                showAvailableOnly
                  ? product.name === name && product.availability === true
                  : product.availability === false || product.name === name
              )

              .map((item) => (
                <div className="relative" key={item.price}>
                  <Product
                    name={item.name}
                    qty={item.qty}
                    availability={item.availability}
                    price={item.price}
                    type={item.type}
                  />
                </div>
              ))}
          </div>
        ) : (
          <div className="relative">
            <p className="px-2 text-2xl text-gray-300">
              Product not yet in stock
            </p>
          </div>
        )}
      </div>
    ) : (
      <div className="relative">
        {products.filter((item) => item.qty === Number(factor)).length > 1 ? (
          <div className="relative">
            {products
              .filter((item) => item.qty === Number(factor))
              .map((item) => (
                <div className="relative">
                  {
                    <Product
                      name={item.name}
                      price={item.price}
                      availability={item.availability}
                      qty={item.qty}
                    />
                  }
                </div>
              ))}
          </div>
        ) : (
          <div className="relative">{<p>Empty </p>}</div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="">{filteredProducts()}</div>
    </>
  );
}
export default Sorter;
