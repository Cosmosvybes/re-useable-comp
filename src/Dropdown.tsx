import { useState } from "react";
// import { MinusThin, PlusThin } from "react-huge-icons/outline";
interface Content {
  head: string;
  contentBody: { id: number; content: string }[];
}

function Dropdown({ head, contentBody }: Content) {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="relative flex-col flex justify-end max-sm:px-1  max-sm:w-auto transition duration-200">
        <div
          className="flex justify-between  items-center"
          onClick={() => setShow(!show)}
        >
          <button
            className=" transition-opacity duration-1000 text-start text-2xl font-thin max-sm:text-xl text-sky-500 w-96 h-auto"
            onClick={() => setShow(!show)}
          >
            {head}
          </button>
        </div>

        {!show && (
          <div
            className={`transition  duration-1000 h-auto w-full inline-block`}
          >
            {contentBody.map((content) => (
              <div key={content.id} className="h-auto">
                <a className=" cursor-pointer hover:underline inline  hover:text-sky-700 text-xs py-0 h-auto">
                  {content.content}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Dropdown;
