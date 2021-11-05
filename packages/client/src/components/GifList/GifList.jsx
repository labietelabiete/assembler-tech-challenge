import React from "react";

import GifCard from "../GifCard";

export default function GifList({ title, gifs }) {
  return (
    <div className="row">
      <h1>Last Users Gifs</h1>
      {gifs.map((gif) => (
        <GifCard
          key={gif._id}
          gifId={gif._Id}
          gifTitle={gif.title}
          gifCategory={gif.category}
          gifUrl={gif.url}
          gifUser={gif.userId}
        />
      ))}
    </div>
  );
}
