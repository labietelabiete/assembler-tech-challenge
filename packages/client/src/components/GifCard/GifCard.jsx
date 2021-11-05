import React from "react";

import "./GifCard.scss";

import Button from "../../components/Button";

export default function GifCard({
  giftId = "",
  gifTitle = "",
  gifCategory = "",
  gifUrl = "",
  gifUserName,
}) {
  const handleShareGif = () => {
    navigator.clipboard.writeText(gifUrl);
  };
  return (
    <div className="col col-3">
      <div className="gif-card gif-card-border mb-5">
        <img className="gif-img" src={gifUrl} alt={gifTitle} />
        <div className="gif-info">
          <p className="gif-title text-center py-3">{gifTitle}</p>
          <div className="d-flex justify-content-between">
            <div>
              <p className="ps-3">Category: {gifCategory}</p>
              <p className="ps-3">User: {gifUserName}</p>
            </div>
            <Button classNames="m-3" terciaryBtn onClick={handleShareGif}>
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
