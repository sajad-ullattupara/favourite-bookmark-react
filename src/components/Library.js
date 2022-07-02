import React from "react";
import Books from "./Books";
import Favorite from "./Favorite";

function Library() {
  return (
    <div className="library">
      <h1>Library</h1>
      <Books />
      <h1>Favorites</h1>
      <Favorite />
    </div>
  );
}
export default Library;