import React, { useReducer } from "react";

const IntialState = {
  fullName: "",
  age: "",
  phoneNumber: "",
};

const reducerFunction = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case "FULL_NAME":{
      return {...state, fullName: payload}
    }
    case "AGE":{
      return {...state, age: payload}
    }
    case "PHONE_NUMBER":{
      return {...state, phoneNumber: payload}
    } 
    default:
      return {...state}
  }
}

const inputField =
  "border border-gray-300 rounded-lg my-2 py-2 px-4 outline-none bg-slate-100";

const UseReducerLikeRedux = () => {
  const [formInputs, dispatch] = useReducer(reducerFunction, IntialState);

  const handleInputChange = (name) => (event) => {
    dispatch({type: name, payload: event.target.value});
  };

  const handleClick = () => {
    console.log('formInputs :>>', {formInputs});
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-3xl font-bold">useReducer == Redux</span>
      <div className="flex flex-col justify-center items-center my-5">
        <input
          type="text"
          value={formInputs.fullName}
          className={inputField}
          placeholder="Full Name"
          onChange={handleInputChange("FULL_NAME")}
        />
        <input
          type="text"
          value={formInputs.age}
          className={inputField}
          placeholder="Age"
          onChange={handleInputChange("AGE")}
        />
        <input
          type="text"
          value={formInputs.phoneNumber}
          className={inputField}
          placeholder="Phone Number"
          onChange={handleInputChange("PHONE_NUMBER")}
        />
        <button className={inputField} onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default UseReducerLikeRedux;
