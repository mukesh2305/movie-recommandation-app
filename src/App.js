import "./styles.css";
import React, { useState } from "react";
var movies = {
  comady: [
    {
      name: "housefull4",
      rating: "4/5"
    },
    {
      name: "dhol",
      rating: "3.5/5"
    },
    {
      name: "housefull3",
      rating: "3/5"
    }
  ],
  action: [
    {
      name: "bahubali",
      rating: "5/5"
    },
    {
      name: "tiger",
      rating: "4.5/5"
    },
    {
      name: "singham",
      rating: "4/5"
    }
  ],
  horror: [
    {
      name: "bhootnath",
      rating: "4/5"
    },
    {
      name: "kanchana 3",
      rating: "5/5"
    },
    {
      name: "conguring",
      rating: "5/5"
    }
  ]
};
// var genres = ["javascript", "fiction", "bussiness"];
var booksArr = Object.keys(movies);
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  function categoryClickHandler(moviesCategory) {
    setSelectedCategory(moviesCategory);

    console.log(selectedCategory);
  }

  return (
    <div className="App">
      <h1>🎦 goodMovies</h1>
      <div className="main">
        <h4>Checkout my favorite movies. Select a genre to get started</h4>
        {booksArr.map((movies) => {
          return (
            <button
              key={movies}
              className="btn"
              style={{ marginRight: "1rem" }}
              onClick={() => categoryClickHandler(movies)}
            >
              {movies}
            </button>
          );
        })}
        {selectedCategory && (
          <ul>
            {movies[selectedCategory].map((movie) => {
              return (
                <li id="listItem" key={movie.name}>
                  <div id="name"> {movie.name}</div>
                  <div id="name" style={{ fontWeight: "normal" }}>
                    {" "}
                    {movie.rating}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
