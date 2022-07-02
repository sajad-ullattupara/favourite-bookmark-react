import React, { useContext } from "react";
import AppContext from "../AppContext";

function Favorite() {
  const value = useContext(AppContext);

  return (
    <div className="books">
      {value.state.favorites.map((book, index) => {
        return (
          <div className="book" key={index}>
            <h1 className="title">{book.title}</h1>
            <p className="description">{book.description}</p>
            <h3 className="author">{book.author}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default Favorite;