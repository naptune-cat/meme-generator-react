import { getAllMeme } from "../api/Memes";
import MyCard from "../components/MemeCard";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMeme().then((memes) => setData(memes));
  }, []);

  return (
    <div className="row">
      {data.map((meme) => (
        <MyCard key={meme.id} img={meme.url} title={meme.name} />
      ))}
    </div>
  );
};

export default Home;
