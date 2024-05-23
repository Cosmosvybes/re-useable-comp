import { useEffect, useState } from "react";
import { ArrowRight } from "react-huge-icons/outline";

type InputModel = {
  inputType: string;
  name: string | any;
  initialValue: string | boolean;
};
interface Form {
  title: string;
  form: InputModel[];
}

function Template({ title, form }: Form) {
  //handle all the input values here in a single object
  const allValues: any = form.reduce(
    (valuesBucket, input) => ({
      ...valuesBucket,
      [input.name]: input.initialValue,
    }),
    {}
  );

  // set state of all inputs value
  const [inputValues, setInputValues] = useState(allValues);

  //upddate the input details by the value name and the new Value
  const updateInputValues = (newValue: string | boolean, valueName: any) => {
    setInputValues((prevValues: any) => ({
      ...prevValues,
      [valueName]: newValue,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      updateInputValues("Alfred chris", "first name");
      console.log(inputValues);
    }, 5000);
  }, []);

  const formGenerator: any = () => {
    return form.map((input, index) => {
      switch (input.inputType) {
        case "radio":
          return (
            <div className="" key={index}>
              <form className="block">
                <div className="relative gap-2 flex justify-start">
                  <input
                    title="gender"
                    name={input.name}
                    type="radio"
                    value={allValues[input.name]}
                    onChange={() =>
                      updateInputValues(input.initialValue, input.name)
                    }
                  />
                  <p>{input.initialValue}</p>
                </div>
              </form>
            </div>
          );

        case "checkbox":
          return (
            <div className="relative" key={index}>
              <form className="block">
                <input
                  title="check"
                  type="checkbox"
                  className="max-sm:w-auto"
                  value={allValues[input.name]}
                  onChange={(e) =>
                    updateInputValues(e.currentTarget.checked, input.name)
                  }
                />
              </form>
            </div>
          );

        default:
          return (
            <div className="relative" key={index}>
              <form className="">
                <p>{input.name}</p>
                <input
                  className="border px-2 py-3 rounded-md outline-gray-300 w-96 max-sm:w-full"
                  type={"text"}
                  value={inputValues[input.name]}
                  placeholder={input.name}
                  onChange={(e) =>
                    updateInputValues(e.target.value, input.name)
                  }
                />
              </form>
            </div>
          );
      }
    });
  };
  const handleSubmit = () => {
    console.log(inputValues);
  };

  return (
    <>
      <h1 className="text-start text-2xl px-44  max-sm:px-2 ">{title}</h1>
      <div className="relative grid grid-cols-2 gap-2  px-44 max-sm:px-2">
        {formGenerator()}
      </div>
      <div className="relative  px-44  w-full max-sm:px-2 flex hover:text-white justify-start">
        <button
          onClick={handleSubmit}
          className="w-96 hover:bg-sky-400 font-thin hover:text-gray-50 mt-3 text-gray-500 text-2xl rounded-md max-sm:w-full py-2 px-2 border"
        >
          save <ArrowRight className="text-3xl  text-gray-400 inline" />
        </button>
      </div>
    </>
  );
}
export default Template;
