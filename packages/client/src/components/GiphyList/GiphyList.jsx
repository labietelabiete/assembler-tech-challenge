import React from "react";

import GifCard from "../GifCard";

export default function GifList({ title, gifs }) {
  return (
    <div className="row my-4">
      <h1 className="mb-4">{title}</h1>
      {gifs.map((gif) => (
        <GifCard
          key={gif.id}
          gifId={gif.id}
          gifTitle={gif.title}
          gifCategory={gif.type}
          gifUrl={gif.images.fixed_height.url}
          gifUserName={gif.username}
        />
      ))}
    </div>
  );
}
