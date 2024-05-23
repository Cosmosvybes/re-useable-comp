import { Call, CartHasDash, Information } from "react-huge-icons/outline";

interface Product {
  name: string;
  qty: number;
  availability: boolean;
  price: number;
  type?: string;
}
function Product({ name, qty, availability, price, type }: Product) {
  return (
    <>
      <div className="relative block  py-1 bg-gray-50 px-2 h-auto rounded-lg">
        <div className="relative flex justify-start items-center">
          <Information className="text-2xl inline text-sky-500" />{" "}
          <h1 className=" text-sky-500 py-1 text-3xl text-start px-2 ">
            Product Info
          </h1>
        </div>
        <div
          className={`${!availability && "line-through"} text-gray-400 "flex justify-start"`}
        >
          <h1 className="px-2">{name}</h1>
          <h1 className="px-2 inline">{type}</h1>
        </div>

        <p className="text-gray-400 text-2xl px-2">Qty: {qty}</p>
        <p className="text-gray-400 text-2xl px-2">Price: ${price}</p>
        <p
          className={`${
            availability ? "text-green-500" : "text-red-500"
          } rounded-md px-2 py-2 absolute right-0 top-5 rotate-45 `}
        >
          {availability ? "Available" : "Out of Stock"}
        </p>
        <div className="flex items-center bg-gray-50  gap-5 justify-end mt-2">
          <Call className="text-3xl text-gray-400" />
          <CartHasDash className="text-3xl text-gray-400" />
        </div>
      </div>
    </>
  );
}
export default Product;
