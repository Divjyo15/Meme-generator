import React, { useEffect, useState } from "react";
import MemeCard from "../component/Card";
import { getAllMemes } from "../api/Meme";

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => {
      console.log("Fetched data:", memes.data.memes);
      setData(memes.data.memes);
    });
  }, []);

  console.log("Data:", data);

  return (
    
    <div className="container d-flex flex-row flex-wrap">
      <div className="row">
      
        {data.map((el, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-3">
            <MemeCard meme={el} title={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;

