import "./styles.css";
import React, { useState, useEffect } from "react";

const genres = {
  romance: [
    { name: "Raataan Lambiyan", views: "744M Views" },
    { name: "Kesariya", views: "205M Views" },
    { name: "Mera Yaara", views: "86M Views" },
    { name: "Pal Pal Har Pal", views: "11M Views" },
    { name: "Saudebazi", views: "7.1M Views" }
  ],
  retro: [
    { name: "Ek Pyar Ka Nagma hai", views: "80M Views" },
    { name: "Aate Jate Khoobsurat Awara Sadko Pe", views: "9.1M Views" },
    { name: "Hawa Ke Saath Saath", views: "6.5M Views" },
    { name: "Bade Acche Lagte Hai", views: "6M Views" },
    { name: "Musafir Hoon Yaron", views: "2.1M Views" }
  ],
  party: [
    { name: "Abhi Toh Party Shuru Hui Hai", views: "666M Views" },
    { name: "Chogada", views: "642M Views" },
    { name: "Sauda Khara Khara", views: "356M Views" },
    { name: "Gallan Goodiyaan", views: "354M Views" },
    { name: "Sanu Kehndi", views: "66M Views" }
  ]
};

const genresName = Object.keys(genres);
const genresList = Object.values(genres);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    setSelectedGenre(0);
    setSelectedList(genresList[0]);
  }, []);

  const handleClick = (index) => {
    setSelectedGenre(index);
    setSelectedList(genresList[index]);
  };

  return (
    <div className="App">
      <div className="header-div">
        <div className="header">🎶 Ear's Delight 🎶</div>
        <div className="sub-header">
          Ear's delight suggest you some soulful songs to make you mood.
        </div>
      </div>

      <div className="category">
        {genresName.map((item, index) => {
          return (
            <button
              className={selectedGenre === index ? "selected-btn" : "btn"}
              key={index}
              onClick={() => handleClick(index)}
            >
              {item}
            </button>
          );
        })}
        <div className="card-div">
          {selectedList &&
            selectedList.map((item, index) => {
              return (
                <div key={index} className="card">
                  <p className="song-name">{item.name}</p>
                  <p className="song-views">{item.views}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
