import "./AdvancedFilter.css";
import { fetchSomeColumns } from "../../api/fetchData";
import { useEffect, useState } from "react";

const AdvancedFilter = ({ onChange, value }) => {
  const [coinCols, setCoinCols] = useState([]);
  const {
    coin_country,
    coin_price_min,
    coin_price_max,
    coin_composition,
    coin_year_min,
    coin_year_max,
    coin_quality,
  } = value;

  useEffect(() => {
    const urlApi =
      "coins/columns?data=coin_country,coin_composition,coin_quality";
    fetchSomeColumns(urlApi).then((data) => setCoinCols(data[0]));
  }, []);

  return (
    <div className="AdvancedFilter">
      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Issuing country
        </label>
        <div className="Form_InputBox SelectInput">
          <select
            name="coin_country"
            value={coin_country}
            className="Form_Input"
            onChange={onChange}
          >
            <option value="">Select issuing country</option>
            {coinCols.coin_country?.map(({ id, value }) => {
              return (
                <option key={id} value={value}>
                  {value}
                </option>
              );
            })}
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
            <input
              type="number"
              name="coin_price_min"
              value={coin_price_min}
              className="Form_Input"
              onChange={onChange}
            />
          </div>
          <div>
            <small> to </small>
            <input
              type="number"
              name="coin_price_max"
              value={coin_price_max}
              className="Form_Input"
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Metal
        </label>
        <div className="Form_InputBox SelectInput">
          <select
            name="coin_composition"
            value={coin_composition}
            className="Form_Input"
            onChange={onChange}
          >
            <option value="">Select composition</option>
            {coinCols.coin_composition?.map(({ id, value }) => {
              return (
                <option key={id} value={value}>
                  {value}
                </option>
              );
            })}
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
            <input
              type="number"
              name="coin_year_min"
              value={coin_year_min}
              className="Form_Input"
              onChange={onChange}
            />
          </div>
          <div>
            <small> to </small>
            <input
              type="number"
              name="coin_year_max"
              value={coin_year_max}
              className="Form_Input"
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <div className="Form_Control">
        <label className="Form_Label" htmlFor="">
          Quality of the coin
        </label>
        <div className="Form_InputBox SelectInput">
          <select
            name="coin_quality"
            value={coin_quality}
            className="Form_Input"
            onChange={onChange}
          >
            <option value="">Select quality of coin</option>
            {coinCols.coin_quality?.map(({ id, value }) => {
              return (
                <option key={id} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilter;
