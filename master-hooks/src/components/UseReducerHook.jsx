import React, { useReducer } from "react";

const IntialState = {
  fullName: "",
  age: "",
  phoneNumber: "",
};

const reducerFunction = (prevState, nextState) => {
  return {...prevState, ...nextState};
}

const inputField =
  "border border-gray-300 rounded-lg my-2 py-2 px-4 outline-none bg-slate-100";

const UseReducerHook = () => {
  const [formInputs, setFormInputs] = useReducer(reducerFunction, IntialState);

  const handleInputChange = (name) => (event) => {
    setFormInputs({[name]: event.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-3xl font-bold">useReducer</span>
      <div className="flex flex-col justify-center items-center my-5">
        <input
          type="text"
          value={formInputs.fullName}
          className={inputField}
          placeholder="Full Name"
          onChange={handleInputChange("fullName")}
        />
        <input
          type="text"
          value={formInputs.age}
          className={inputField}
          placeholder="Age"
          onChange={handleInputChange("age")}
        />
        <input
          type="text"
          value={formInputs.phoneNumber}
          className={inputField}
          placeholder="Phone Number"
          onChange={handleInputChange("phoneNumber")}
        />
        <button className={inputField}>Submit</button>
      </div>
    </div>
  );
};

export default UseReducerHook;
