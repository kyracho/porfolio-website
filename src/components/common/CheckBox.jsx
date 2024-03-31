import React from "react";
import PropTypes from "prop-types";

function CheckBox(props) {
  const { id, name, label } = props;
  return (
    <div>
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
        type="checkbox"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-bg2 checked:bg-primary checked:before:bg-primary hover:before:opacity-10 hover:bg-primary after:hover:bg-primary focus:bg-bg2"
        id={id}
        name={name}
        
      />
        <label
          className="inline-block pl-2 hover:cursor-pointer text-content/80"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

CheckBox.propTypes = {};

export default CheckBox;
