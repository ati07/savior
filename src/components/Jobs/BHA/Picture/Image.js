import React, { useState } from "react";
// import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import './Image.css'
function Image() {
  const [image, setImage] = useState({
    Img: "/Img/Capture.PNG",
  });

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage({ Img: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div>
      <div className="page">
        <div className="container">
          <div className="img-holder">
            <img src={image.Img} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={imageHandler}
          />
          {/* <div className="label">
            <label className="image-upload" htmlFor="input">
              <AddAPhotoIcon />
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Image;
