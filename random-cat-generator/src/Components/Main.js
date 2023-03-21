import React, { useState } from "react";
import "./style.css";
const Main = () => {
  const [imgUrl, setImgUrl] = useState("");
  const callImg = () => {
    fetch("//https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setImgUrl(data[0].url));
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Enjoy the Kitty 😺</h2> <br />
          <img src={imgUrl}></img> <br />
          <button onClick={() => callImg()}>Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Main;

//https://api.thecatapi.com/v1/images/search
