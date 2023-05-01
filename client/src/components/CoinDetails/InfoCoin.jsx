import { Link } from "react-router-dom";

const InfoCoin = () => {
  return (
    <>
      <h2 className="InfoCoin_Title">Canadian Beaver</h2>
      <div className="InfoCoin_Content">
        <p className="InfoCoin_Desc">
          "Canadian beaver". Unique coin with the image of a beaver. Face value
          - 5 cents. Created under Elizabeth II.
        </p>
        <p className="InfoCoin_Text-1">
          In the center of the obverse is a portrait of Queen Elizabeth II, the
          profile is directed to the right. The inscription on the left
          semicircle (English) ELIZABETH II, on the right semicircle D · G ·
          REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a
          mint mark.
        </p>
        <p className="InfoCoin_Text-2">
          In the center of the coin reverse is a Canadian beaver on a rock
          sticking out of the water. At the top is a semicircle with the
          inscription "5 cents" between two maple leaves. At the bottom in two
          lines is the inscription CANADA (CANADA) and the year of minting.
        </p>
      </div>
      <table className="InfoCoin_Table">
        <tbody>
          <tr>
            <th>Issuing Country</th>
            <td>CANADA</td>
          </tr>
          <tr>
            <th>Composition</th>
            <td>Nickel</td>
          </tr>
          <tr>
            <th>Quality</th>
            <td>BU</td>
          </tr>
          <tr>
            <th>Denomination</th>
            <td>5 cents</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>1965</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>4.54 g</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>40$</td>
          </tr>
        </tbody>
      </table>
      <Link to="../" className="InfoCoin_BackTo">
        Back to the list
      </Link>
    </>
  );
};

export default InfoCoin;
