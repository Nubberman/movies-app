import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [movie, setMovie] = useState([]);

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getMovies = async () => {
    const { data } = await axios(url);
    setMovie(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div></div>;
};

export default Main;
