import { Link } from "react-router-dom";

const InfoCoin = ({
  name,
  desc,
  text1,
  text2,
  country,
  composition,
  quality,
  denomination,
  year,
  weight,
  price,
  backPath
}) => {
  return (
    <>
      <h2 className="InfoCoin_Title">{name}</h2>
      <div className="InfoCoin_Content">
        <p className="InfoCoin_Desc">{desc}</p>
        <p className="InfoCoin_Text-1">{text1}</p>
        <p className="InfoCoin_Text-2">{text2}</p>
      </div>
      <table className="InfoCoin_Table">
        <tbody>
          <tr>
            <th>Issuing Country</th>
            <td>{country}</td>
          </tr>
          <tr>
            <th>Composition</th>
            <td>{composition}</td>
          </tr>
          <tr>
            <th>Quality</th>
            <td>{quality}</td>
          </tr>
          <tr>
            <th>Denomination</th>
            <td>{denomination}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{year}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{weight}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
      <Link to={`../?${backPath}`} className="InfoCoin_BackTo">
        Back to the list
      </Link>
    </>
  );
};

export default InfoCoin;
