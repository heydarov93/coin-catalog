import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoinDataInput from "./CoinDataInput";
import DropDownInput from "./DropDownInput";
import CoinCategoryInput from "./CoinCategoryInput";
import {
  fetchCategories,
  fetchDenominationUnits,
  addNewCoin,
  fetchCoinById,
  updateCoin,
} from "../../api/fetchData";
import ShortDescTextarea from "./ShortDescTextarea";
import LongDescTextarea from "./LongDescTextarea";
import UploadPicture from "./UploadPicture";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../config/firebase";

const validationHandler = (requiredInputsObject) => {
  const warningObject = {};

  Object.entries(requiredInputsObject).forEach(([name, value]) => {
    if (String(value).trim() === "") {
      warningObject[name] = "Warning";
    }
  });

  return warningObject;
};

const AddEditCoin = () => {
  // only for edit page
  const { id: editId } = useParams();
  const [newImgUrl, setNewImgUrl] = useState({
    coin_img1: null,
    coin_img2: null,
  });
  const [originalImg, setOriginalImg] = useState({
    coin_img1: "",
    coin_img2: "",
  });
  // for add and edit page
  const unitListRef = useRef(null);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [denominationUnitList, setDenominationUnitList] = useState([]);
  const [unitListStyle, setUnitListStyle] = useState({ display: "none" });
  const [longDesc, setLongDesc] = useState([
    { desc_id: null, desc_coinId: null, text: "" },
  ]);
  const [warningClasses, setWarningClasses] = useState({});
  const [formData, setFormData] = useState({
    coin_name: "",
    coin_category: "",
    coin_denomination: "",
    denomination_unit: "",
    coin_year: "",
    coin_price: "",
    coin_country: "",
    coin_composition: "",
    coin_shortDesc: "",
    coin_longDesc: longDesc,
    coin_quality: "",
    coin_weight: "",
    coin_img1: "",
    coin_img2: "",
  });

  const clearFormData = () => {
    setFormData({
      coin_name: "",
      coin_category: "",
      coin_denomination: "",
      denomination_unit: "",
      coin_year: "",
      coin_price: "",
      coin_country: "",
      coin_composition: "",
      coin_shortDesc: "",
      coin_longDesc: longDesc,
      coin_quality: "",
      coin_weight: "",
      coin_img1: "",
      coin_img2: "",
    });
  };

  const onChangeImgUrl = (inputName, url) => {
    const imgColName = inputName === "front" ? "coin_img1" : "coin_img2";
    setFormData((prev) => ({ ...prev, [imgColName]: url }));
    setNewImgUrl((prev) => ({ ...prev, [imgColName]: url }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onFocusDenominationUnit = (e) => {
    const { x, y, width, height } = e.target.getBoundingClientRect();

    setUnitListStyle({
      left: x,
      top: window.scrollY + y + height + 3,
      width: width * 2,
    });
  };

  const selectFromDropDown = (e) => {
    const { textContent } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        denomination_unit: textContent,
      };
    });
  };

  const onBlurUnitInput = () => {
    unitListRef.current.focus();

    setTimeout(() => {
      unitListRef.current.blur();
      setUnitListStyle({ display: "none" });
    }, 100);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const emptyInputs = {
      ...validationHandler({
        coin_name: formData.coin_name,
        coin_category: formData.coin_category,
        coin_shortDesc: formData.coin_shortDesc,
        coin_img1: formData.coin_img1,
        coin_img2: formData.coin_img2,
      }),
    };

    // if one of the required inputs is empty then prevent submit
    if (Object.values(emptyInputs).length > 0) {
      setWarningClasses({ ...emptyInputs });
      return;
    }

    // if there is editId then it means we in an edit page
    if (editId) {
      // update custom hook
      formData.coin_img1 !== originalImg.coin_img1 &&
        deleteObject(ref(storage, originalImg.coin_img1));
      formData.coin_img2 !== originalImg.coin_img2 &&
        deleteObject(ref(storage, originalImg.coin_img2));

      updateCoin(formData, editId);
    } else {
      //if we in an add page and everything is ok then submit data
      addNewCoin(formData);
    }

    // reset inputs, states
    setNewImgUrl({ coin_img1: null, coin_img2: null });
    clearFormData();
    setLongDesc([{ desc_id: null, desc_coinId: null, text: "" }]);
    setWarningClasses({});
    navigate("/admin");
  };

  const onReset = (e) => {
    e.preventDefault();

    newImgUrl.coin_img1 && deleteObject(ref(storage, newImgUrl.coin_img1));
    newImgUrl.coin_img2 && deleteObject(ref(storage, newImgUrl.coin_img2));
    setNewImgUrl({ coin_img1: null, coin_img2: null });
    clearFormData();
    setLongDesc([{ desc_id: null, desc_coinId: null, text: "" }]);
    navigate(-1);
  };

  const addLongDescField = (e) => {
    e.preventDefault();

    setLongDesc((prev) => [
      ...prev,
      { desc_id: null, desc_coinId: editId || null, text: "" },
    ]);
  };

  const onChangeLongDesc = (e) => {
    const { name, value } = e.target;
    // id is like "longDesc1", "longDesc2" ...
    const indexOfDesc = name.split("longDesc")[1] - 1; // id starts at 1, but index is 0 based
    const copyOfLongDesc = [...longDesc];
    copyOfLongDesc[indexOfDesc].text = value;
    setLongDesc(copyOfLongDesc);
  };

  const deleteLongDescField = (e) => {
    e.preventDefault();
    const indexOfDesc = e.target.id.split("deleteLongDesc")[1] - 1;
    const updatedCopyOfLongdesc = [...longDesc];
    updatedCopyOfLongdesc.splice(indexOfDesc, 1);
    setLongDesc(updatedCopyOfLongdesc);
  };

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, coin_longDesc: longDesc };
    });
  }, [longDesc]);

  useEffect(() => {
    fetchDenominationUnits(formData.denomination_unit).then((data) =>
      setDenominationUnitList(data)
    );
  }, [formData.denomination_unit]);

  useEffect(() => {
    if (editId) {
      fetchCoinById(editId).then((response) => {
        const data = { ...response[0] };
        console.log(data);
        if (data) {
          const longDescs = data.descriptions.map(
            ({ desc_id, desc_coinId, desc_text }) => ({
              desc_id,
              desc_coinId,
              text: desc_text,
            })
          );
          setLongDesc([...longDescs]);

          // price and weight value inputs are number type
          // we need to parse number-currency mixed value to number
          setFormData({
            coin_name: data.coin_name,
            coin_category: data.coin_category,
            coin_denomination: data.coin_denomination,
            denomination_unit: data.denomination_unit,
            coin_year: data.coin_year,
            coin_country: data.coin_country,
            coin_composition: data.coin_composition,
            coin_shortDesc: data.coin_shortDesc,
            coin_longDesc: longDesc,
            coin_quality: data.coin_quality,
            coin_img1: data.coin_img1,
            coin_img2: data.coin_img2,
            // if price or weight have value then parse, else return empty str
            coin_weight: data.coin_weight && parseFloat(data.coin_weight),
            coin_price: data.coin_price && parseFloat(data.coin_price),
          });

          setOriginalImg({
            coin_img1: data.coin_img1,
            coin_img2: data.coin_img2,
          });
        }
      });
    }

    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="Container AdminPanel">
      <h1 className="Title">Admin Panel</h1>
      <form
        method="post"
        className="AddEditCoin"
        encType="multipart/form-data"
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <div className="InputColumn">
          <CoinDataInput
            label="Coin name"
            name="coin_name"
            type="text"
            value={formData.coin_name}
            className={warningClasses.coin_name}
            onChange={onChange}
          />
          <CoinCategoryInput
            value={formData.coin_category}
            name="coin_category"
            id="coin_category"
            label="Coin category"
            categories={categories}
            onChange={onChange}
            className={warningClasses.coin_category}
          />
          <div className="Value_Unit_Wrapper">
            <CoinDataInput
              label="Face value"
              name="coin_denomination"
              type="text"
              value={formData.coin_denomination}
              onChange={onChange}
            />
            <DropDownInput
              label="Unit"
              name="denomination_unit"
              type="text"
              value={formData.denomination_unit}
              onChange={onChange}
              className="Denomination_Unit"
              onFocus={onFocusDenominationUnit}
              onBlur={onBlurUnitInput}
              unitListStyle={unitListStyle}
              data={denominationUnitList}
              selectFromDropDown={selectFromDropDown}
              ref={unitListRef}
            />
          </div>
          <CoinDataInput
            label="Year of issue"
            name="coin_year"
            type="number"
            value={formData.coin_year}
            onChange={onChange}
          />
          <CoinDataInput
            label="Price ($)"
            name="coin_price"
            type="number"
            value={formData.coin_price}
            onChange={onChange}
          />
          <CoinDataInput
            label="Country"
            name="coin_country"
            type="text"
            value={formData.coin_country}
            onChange={onChange}
          />
          <CoinDataInput
            label="Metal"
            name="coin_composition"
            type="text"
            value={formData.coin_composition}
            onChange={onChange}
          />
          <CoinDataInput
            label="Quality of the coin"
            name="coin_quality"
            type="text"
            value={formData.coin_quality}
            onChange={onChange}
          />
          <CoinDataInput
            label="Coin weight (g)"
            name="coin_weight"
            type="number"
            value={formData.coin_weight}
            onChange={onChange}
          />
        </div>

        <div className="InputColumn">
          <ShortDescTextarea
            id="coin_shortDesc"
            label="Short description"
            name="coin_shortDesc"
            value={formData.coin_shortDesc}
            onChange={onChange}
            className={warningClasses.coin_shortDesc}
          />
          <LongDescTextarea
            label="Long description"
            name="longDesc"
            id="longDesc"
            idDeleteBtn="deleteLongDesc"
            addLongDescField={addLongDescField}
            longDesc={longDesc}
            onChangeLongDesc={onChangeLongDesc}
            deleteLongDescField={deleteLongDescField}
          />
        </div>

        <div className="InputColumn">
          <div className="AddImg">
            <UploadPicture
              onChangeImgUrl={onChangeImgUrl}
              frontUrl={formData.coin_img1}
              backUrl={formData.coin_img2}
              originalFront={originalImg.coin_img1}
              originalBack={originalImg.coin_img2}
              className={{
                coin_img1: warningClasses.coin_img1,
                coin_img2: warningClasses.coin_img2,
              }}
            />
          </div>
          <div className="AddEdit_BTNWrapper">
            <button
              id="saveCoinInfo"
              className="AddEditBTN SaveBTN"
              type="submit"
            >
              Save
            </button>
            <button
              id="cancelCoinInfo"
              className="AddEditBTN CancelBTN"
              type="reset"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEditCoin;
