import React, { useState } from "react";

export default function SearchBar(props) {
  // Search Term
  const [ST, setST] = useState("");
  return (
    <div className="search-container">
      <form onSubmit={(e) => props.submit(e, ST)}>
        <input
          className="sb he"
          type="text"
          placeholder="Search.."
          name="search"
          value={ST}
          onChange={(e) => setST(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search icon"></i>
        </button>
      </form>
    </div>
  );
}
