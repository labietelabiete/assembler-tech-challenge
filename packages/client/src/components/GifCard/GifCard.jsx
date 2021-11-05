import React from "react";

export default function GifCard({
  giftId = "",
  gifTitle = "",
  gifCategory = "",
  gifUrl = "",
  gifUserId = "",
}) {
  return <div>{gifTitle}</div>;
}
