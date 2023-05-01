import "./AdvancedFilter.css";

const AdvancedFilter = () => {
  return (
    <div className="AdvancedFilter">
      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Issuing country
        </label>
        <div className="Form_InputBox SelectInput">
          <select className="Form_Input">
            <option value="canada">Canada</option>
          </select>
        </div>
      </div>

      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Price
        </label>
        <div className="Form_DoubleInput">
          <div>
            <small>from </small>
            <input type="number" className="Form_Input" />
          </div>
          <div>
            <small> to </small>
            <input type="number" className="Form_Input" />
          </div>
        </div>
      </div>

      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Metal
        </label>
        <div className="Form_InputBox SelectInput">
          <select className="Form_Input">
            <option value="gold">Gold</option>
          </select>
        </div>
      </div>

      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Year of issue
        </label>
        <div className="Form_DoubleInput">
          <div>
            <small>from </small>
            <input type="number" className="Form_Input" />
          </div>
          <div>
            <small> to </small>
            <input type="number" className="Form_Input" />
          </div>
        </div>
      </div>

      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Quality of the coin
        </label>
        <div className="Form_InputBox SelectInput">
          <select className="Form_Input">
            <option value="proof">Proof</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilter;
