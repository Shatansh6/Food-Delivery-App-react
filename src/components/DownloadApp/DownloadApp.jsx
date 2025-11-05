import React from "react";
import { assets } from "../../assets/assets";
import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="download-app" id="download-app">
      <div className="download-content">
        <h2 className="download-heading">
          Get the <span>Tomato</span> App Today
        </h2>
        <p className="download-subtext">
          Order your favorite meals anytime, anywhere. Download now on your preferred store.
        </p>

        <div className="download-buttons">
          <img src={assets.app_store} alt="App Store" className="store-btn" />
          <img src={assets.play_store} alt="Play Store" className="store-btn" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
