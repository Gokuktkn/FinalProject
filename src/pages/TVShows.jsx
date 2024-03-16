import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import MovieCard from "../components/MovieCard";
import PaginationCard from "../components/PaginationCard";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const TVShows = () => {
  return (
    <>
      <Header />
      <div className="container movies-heading">
        <h1>TV Shows</h1>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Genre
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Adventure</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="container movies-container">
        <div className="movies-sidebar col-md-2">
          <ListGroup>
            <ListGroup.Item>
              <strong>Filter</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <label for="customRange3" class="form-label">
                User score
              </label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              ></input>
            </ListGroup.Item>
            <ListGroup.Item>
              <label for="customRange3" class="form-label">
                Minimum user vote
              </label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              ></input>
            </ListGroup.Item>
            <ListGroup.Item>
              <label for="customRange3" class="form-label">
                Movie length
              </label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              ></input>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Release date</p>
              <input
                type="text"
                class="form-control"
                id="datepicker"
                data-provide="datepicker"
                data-date-format="yyyy-mm-dd"
                data-date-autoclose="true"
              />
              <input
                type="text"
                class="form-control"
                id="datepicker"
                data-provide="datepicker"
                data-date-format="yyyy-mm-dd"
                data-date-autoclose="true"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Language</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Search keywords</p>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="movies-list-pagination col-md-10">
          <div className="movies-list">
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
            <MovieCard class="grid-item">Item 1</MovieCard>
          </div>
          <div className="pagination">
            <PaginationCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TVShows;
