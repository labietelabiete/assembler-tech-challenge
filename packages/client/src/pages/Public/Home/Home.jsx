import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Layout from "../../../components/Layout";
import GifList from "../../../components/GifList";
import GiphyList from "../../../components/GiphyList";

import { getAllGifs } from "../../../api/gifs-api";
import { getTrendingGifs } from "../../../services/giphy/giphy-api";

export default function Home() {
  const [userGifs, setUserGifs] = useState([]);
  const [trendingGifs, setTrendingGifs] = useState([]);

  async function fetchUserGifs() {
    try {
      const data = await getAllGifs();
      setUserGifs(data.data.gifs);
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  async function fetchTrendingGifs() {
    try {
      const data = await getTrendingGifs();
      console.log(data.data.data);
      setTrendingGifs(data.data.data);
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  useEffect(() => {
    fetchUserGifs();
    fetchTrendingGifs();
  }, []);

  return (
    <Layout>
      <div className="container bgr-primary clr-white">
        <GifList title="Last Users Gifs" gifs={userGifs} />
        <GiphyList title="Giphy Trending Gifs" gifs={trendingGifs} />
      </div>
    </Layout>
  );
}
