import { forwardRef } from "react";

const DropDownInput = forwardRef(
  (
    {
      label,
      name,
      type,
      value,
      onChange,
      className = "",
      onFocus = null,
      onBlur,
      selectFromDropDown,
      unitListStyle,
      data,
    },
    ref
  ) => {
    return (
      <div className={`Form_Control ${className}`}>
        <label className="Form_Label" htmlFor={name}>
          {label}
        </label>
        <div className="Form_InputBox">
          <input
            className="Form_Input"
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete="off"
          />
          <ul
            ref={ref}
            style={unitListStyle}
            id="denomination_UnitList"
            tabIndex="0"
          >
            {data.map(({ id, denomination_unit }) => {
              return (
                <li
                  onClick={selectFromDropDown}
                  key={id}
                  className="UnitList_li"
                >
                  {denomination_unit}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);

export default DropDownInput;
