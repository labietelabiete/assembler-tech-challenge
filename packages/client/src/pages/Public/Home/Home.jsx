import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Layout from "../../../components/Layout";
import GifList from "../../../components/GifList";

import { getAllGifs } from "../../../api/gifs-api";

export default function Home() {
  const [userGifs, setUserGifs] = useState([]);

  async function fetchUserGifs() {
    try {
      const data = await getAllGifs();

      console.log(data.data.gifs);
      setUserGifs(data.data.gifs);
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  useEffect(() => {
    fetchUserGifs();
  }, []);

  return (
    <Layout>
      <div className="container bgr-primary clr-white">
        <GifList title="Last Users Gifs" gifs={userGifs} />
      </div>
    </Layout>
  );
}
