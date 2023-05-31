const LongDescTextarea = ({
  label,
  name,
  id,
  addLongDescField,
  longDesc,
  onChangeLongDesc,
  deleteLongDescField,
  idDeleteBtn,
}) => {
  return (
    <div className="Form_Control">
      <div className="LongDesc_LabelWrapper">
        <label className="Form_Label" htmlFor={`${id}${longDesc.length}`}>
          {label}
        </label>
        <button onClick={addLongDescField} id="addLongDescField">
          <span>+</span>
        </button>
      </div>
      <div className="Form_InputBox LongDescriptions">
        {[...longDesc].reverse().map((desc, i, array) => {
          const uniqueEndForId = array.length - i;
          return (
            <div key={i} className="LongDesc_Wrapper">
              <textarea
                className="Form_Input Form_Textarea"
                id={`${name}${uniqueEndForId}`}
                name={`${id}${uniqueEndForId}`}
                value={desc.text}
                onChange={onChangeLongDesc}
              ></textarea>
              {
                // if textarea is not a first textarea then add x btn to each textarea for delete field
                // because of reverse above, the first element's index is last.
                i !== array.length - 1 && (
                  <button
                    onClick={deleteLongDescField}
                    className="Delete_LongDesc"
                    id={`${idDeleteBtn}${uniqueEndForId}`}
                  >
                    <span>x</span>
                  </button>
                )
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LongDescTextarea;
