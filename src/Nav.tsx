import Dropdown from "./Dropdown";
import "./App.css";
import { ListViewRectangle, RemoveRectangle } from "react-huge-icons/outline";
import { useState } from "react";
function Nav() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [FAQs] = useState([
    {
      id: 143,
      head: "About us",

      body: [
        { id: 888, content: "Overview" },
        {
          id: 12,
          content: "Leadership",
        },
      ],
    },
    {
      id: 321,
      head: "Product and Services",
      body: [
        { id: 23, content: "Banking and Investment" },
        {
          id: 32,
          content: "HR Management",
        },
      ],
    },
    {
      id: 31,
      head: "Training and Bootcamps",
      body: [
        { id: 98, content: "Hackathons" },
        { id: 88, content: "Tutuorial" },
      ],
    },
    {
      id: 13,
      head: "Contact us",
      body: [
        { id: 33, content: "Email" },
        { id: 44, content: "Social Media" },
        { id: 8963, content: "Virtual Meeting" },
      ],
    },
    {
      id: 134,
      head: "Achievements",
      body: [
        { id: 993, content: "Top Rankings" },
        { id: 9394, content: "World Accolades" },
      ],
    },
  ]);
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <div className=" relative  max-sm:px-0 max-sm:w-full h-auto z-20">
        <header className="h-20 w-full px-48 bg-sky-500 flex justify-end items-center max-sm:px-2">
          {showDropDown ? (
            <RemoveRectangle
              onClick={handleDropDown}
              className="text-4xl text-gray-50"
            />
          ) : (
            <ListViewRectangle
              className="text-4xl text-gray-50"
              onClick={handleDropDown}
            />
          )}
        </header>

        {showDropDown && (
          <div className="flex justify-start w-96 right-0  absolute flex-col max-sm:h-auto max-sm:w-36 h-screen ">
            {FAQs.map((faq) => (
              <div className="relative w-full" key={faq.id}>
                <Dropdown head={faq.head} contentBody={faq.body} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Nav;
