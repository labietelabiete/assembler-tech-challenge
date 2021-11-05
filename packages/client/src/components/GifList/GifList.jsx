import React from "react";

import GifCard from "../GifCard";

export default function GifList({ title, gifs }) {
  console.log(gifs);
  return (
    <div className="row my-4">
      <h1 className="mb-4">Last Users Gifs</h1>
      {gifs.map((gif) => (
        <GifCard
          key={gif._id}
          gifId={gif._Id}
          gifTitle={gif.title}
          gifCategory={gif.category}
          gifUrl={gif.url}
          gifUserName={gif.userId.userName}
        />
      ))}
    </div>
  );
}
