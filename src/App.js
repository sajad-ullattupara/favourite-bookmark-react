import React, { Component } from "react";
import Library from "./components/Library";
import AppContext from "./AppContext";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          _id: "1",
          title: "Book 1",
          description: "Book Description: Lorem ipsum dolor sit amet",
          author: "Author 1",
        },
        {
          _id: "2",
          title: "Book 2",
          description: "Book Description: Lorem ipsum dolor sit amet",
          author: "Author 2",
        },
        {
          _id: "3",
          title: "Book 3",
          description: "Book Description: Lorem ipsum dolor sit amet",
          author: "Author 3",
        }
      ],
      favorites: [],
    };
  }

  addToFavorites = (book) => {
    if (!this.state.favorites.includes(book)) {
      this.setState({
        favorites: [...this.state.favorites, book],
      });
    }
  };

  removeFromFavorites = (book) => {
    this.state.favorites.map((favorite, index) => {
      console.log(favorite._id, book._id);
      if (favorite._id === book._id) {
        this.state.favorites.splice(index, 1);
      }
    });
    this.setState({
      favorites: this.state.favorites,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addToFavorites: this.addToFavorites,
          removeFromFavorites: this.removeFromFavorites,
        }}
      >
      <Library />
      </AppContext.Provider>
    );
  }
}

export default App;