import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { storage } from "../../config/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
  getBlob,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt3M = file.size / 1024 / 1024 < 3;

  if (!isLt3M) {
    message.error("Image must smaller than 3MB!");
  }

  return isJpgOrPng && isLt3M;
};

const UploadPicture = ({
  onChangeImgUrl,
  frontUrl,
  backUrl,
  originalFront,
  originalBack,
  className = "",
}) => {
  // useRef for upload components needs for triggering them when we click upload label
  const uploadFrontRef = useRef(null);
  const uploadBackRef = useRef(null);

  const [loading, setLoading] = useState({ front: false, back: false });

  // Upload file to firestore bucket
  const customRequest = async (info) => {
    try {
      const { file, filename: inputName } = info;

      // reset previous image info
      onChangeImgUrl(inputName, null);

      setLoading((prev) => ({ ...prev, [inputName]: true }));

      // check which file input is changed, add related url to imgSRC
      const imgSRC = inputName === "front" ? frontUrl : backUrl;
      const originalImg = inputName === "front" ? originalFront : originalBack;

      if (imgSRC !== originalImg) {
        // if imgSRC not null then delete existed img from storage
        // before submit if we select img and then changed our mind and select other img
        // so we need to delete previous img from storage
        imgSRC && deleteObject(ref(storage, imgSRC));
      }

      // create unique file name
      const imageNameArray = file.name.split(".");
      const imgExt = imageNameArray.pop();
      const imgName = imageNameArray.join("");

      // create reference to the full path
      const imgRef = ref(
        storage,
        `coin_images/${imgName}-${uuidv4()}.${imgExt}`
      );

      //upload file and get uploaded img data
      const snapshot = await uploadBytes(imgRef, file);

      if (snapshot) {
        const url = await getDownloadURL(snapshot.ref);

        onChangeImgUrl(inputName, url);

        setLoading((prev) => ({ ...prev, [inputName]: false }));

        message.success("Image uploaded");
      }
    } catch (err) {
      message.error("Error occured while uploading image");
      console.error(err);
    }
  };

  // const customRequest = (info) => {
  //   originalFront ? updateImage(info) : addImage(info);
  // };

  const triggerUploadComponent = (e) => {
    const { id } = e.target;
    if (id === "uploadLabelFront") {
      uploadFrontRef?.current?.upload.uploader.onClick();
      return;
    }

    if (id === "uploadLabelBack") {
      uploadBackRef?.current?.upload.uploader.onClick();
      return;
    }
  };

  // if front image uploads, show loading animation, otherwise show plus upload icon
  const uploadButtonFront = (
    <div>{loading.front ? <LoadingOutlined /> : <PlusOutlined />}</div>
  );

  // if back image uploads, show loading animation, otherwise show plus upload icon
  const uploadButtonBack = (
    <div>{loading.back ? <LoadingOutlined /> : <PlusOutlined />}</div>
  );

  return (
    <>
      <div className="UploadWrapper">
        <Upload
          ref={uploadFrontRef}
          name="front"
          listType="picture-circle"
          className={`avatar-uploader ${className.coin_img1}`}
          showUploadList={false}
          action=""
          beforeUpload={beforeUpload}
          customRequest={customRequest}
        >
          {frontUrl ? (
            <img
              src={frontUrl}
              alt="front side of the coin"
              className="UploadedImage"
            />
          ) : (
            uploadButtonFront
          )}
        </Upload>
        <span
          id="uploadLabelFront"
          onClick={triggerUploadComponent}
          className="UploadLabel"
        >
          Download the obverse
        </span>
      </div>
      <div className="UploadWrapper">
        <Upload
          ref={uploadBackRef}
          name="back"
          listType="picture-circle"
          className={`avatar-uploader ${className.coin_img2}`}
          showUploadList={false}
          action=""
          beforeUpload={beforeUpload}
          customRequest={customRequest}
        >
          {backUrl ? (
            <img
              src={backUrl}
              alt="back side of the coin"
              className="UploadedImage"
            />
          ) : (
            uploadButtonBack
          )}
        </Upload>
        <span
          id="uploadLabelBack"
          onClick={triggerUploadComponent}
          className="UploadLabel"
        >
          Download the reverse
        </span>
      </div>
    </>
  );
};
export default UploadPicture;
