const ShortDescTextarea = ({ id, label, name, value, onChange }) => {
  return (
    <div className="Form_Control">
      <label className="Form_Label" htmlFor={id}>
        {label}
      </label>
      <div className="Form_InputBox">
        <textarea
          className="Form_Input Form_Textarea"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default ShortDescTextarea;
