import React from "react";

import "./GifCard.scss";

export default function GifCard({
  giftId = "",
  gifTitle = "",
  gifCategory = "",
  gifUrl = "",
  gifUserName,
}) {
  return (
    <div className="col col-3">
      <div className="gif-card gif-card-border mb-5">
        <img className="gif-img" src={gifUrl} alt={gifTitle} />
        <div className="gif-info">
          <p className="gif-title text-center py-3">{gifTitle}</p>
          <p className="ps-3">Category: {gifCategory}</p>
          <p className="ps-3">User: {gifUserName}</p>
        </div>
      </div>
    </div>
  );
}
