import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import Layout from "../../../components/Layout";
import GifList from "../../../components/GifList";
import GiphyList from "../../../components/GiphyList";

import { searchGifs } from "../../../api/search-api";
import { searchGiphy } from "../../../services/giphy/giphy-api";

export default function Search() {
  const urlQuery = new URLSearchParams(useLocation().search).get("q");

  const [userGifsFound, setUserGifsFound] = useState([]);
  const [giphyGifsFound, setGiphyGifsFound] = useState([]);

  async function userGifSearch(searchParam) {
    try {
      const { data } = await searchGifs(searchParam, 0, 16);
      console.log(data, "user data");
      setUserGifsFound(data.gifs);
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  async function giphyGifSearch(searchParam) {
    try {
      const { data } = await searchGiphy(searchParam, 16, 0);
      console.log(data, "giphy data");
      setGiphyGifsFound(data.data);
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  useEffect(() => {
    userGifSearch(urlQuery);
    giphyGifSearch(urlQuery);
  }, []);

  return (
    <Layout>
      <div className="container bgr-primary clr-white">
        <GifList title="Users Gifs Result" gifs={userGifsFound} />
        <GiphyList title="Giphy Gifs Result" gifs={giphyGifsFound} />
      </div>
    </Layout>
  );
}
