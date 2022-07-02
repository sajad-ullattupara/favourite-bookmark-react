import React, { useContext } from "react";
import AppContext from "../AppContext";

function Books() {
  const value = useContext(AppContext);

  return (
    <div className="books">
      {value.state.books.map((book, index) => {
        
        return (
          <div className="book" key={index}>
            <h1 className="title">{book.title}</h1>
            <p className="description">{book.description}</p>
            <h3 className="author">{book.author}</h3>
            {!value.state.favorites.includes(book) ? (
              <div
                className="not-favorite"
                onClick={() => value.addToFavorites(book)}
              >
                Add to favorites
              </div>
            ) : (
              <div
                className="favorite"
                onClick={() => value.removeFromFavorites(book)}
              >
                Remove from favorites
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Books;