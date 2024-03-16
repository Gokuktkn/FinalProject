import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const SortGenre = ({ handleGenreSelect, handleSortChange }) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="movie-genre">
          Genre
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleGenreSelect(null)}>
            All Genres
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenreSelect(28)}>
            Action
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenreSelect(18)}>
            Drama
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenreSelect(12)}>
            Adventure
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="sort-movies">
          Sort movies
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSortChange(null)}>
            Reset
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange("title.asc")}>
            Title (A-Z)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange("title.desc")}>
            Title (Z-A)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange("vote_average.asc")}>
            Rating Ascending
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange("vote_average.desc")}>
            Rating Descending
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SortGenre;
