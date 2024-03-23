import React from "react";
import MovieCard from "../components/MovieCard";
import PaginationCard from "../components/PaginationCard";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import MovieSidebar from "../components/MovieSidebar";
import SortGenre from "../components/SortGenre";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";

const initialState = {
  movies: [],
  currentPage: 1,
  totalPages: 1,
  selectedGenre: null,
  sortBy: null,
  userScoreRange: [0, 10],
  minUserVote: 0,
  movieLengthRange: [0, 400],
  startDate: null,
  endDate: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload,
      };
    case "SET_SELECTED_GENRE":
      return {
        ...state,
        selectedGenre: action.payload,
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "SET_USER_SCORE_RANGE":
      return {
        ...state,
        userScoreRange: action.payload,
      };
    case "SET_MIN_USER_VOTE":
      return {
        ...state,
        minUserVote: action.payload,
      };
    case "SET_MOVIE_LENGTH_RANGE":
      return {
        ...state,
        movieLengthRange: action.payload,
      };
    case "SET_START_DATE":
      return { ...state, startDate: action.payload };
    case "SET_END_DATE":
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
};

const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4a1e2ca2b701f11a28e03fd07df4a512",
    language: "en-US",
    page: 1,
  },
});

const TVShows = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let endpoint = "discover/tv";

        const queryParams = {
          page: state.currentPage,
        };

        if (state.selectedGenre) {
          queryParams.with_genres = state.selectedGenre;
        }
        if (state.sortBy !== null) {
          queryParams.sort_by = state.sortBy;
        }

        if (state.userScoreRange !== undefined) {
          queryParams["vote_average.gte"] = state.userScoreRange[0];
          queryParams["vote_average.lte"] = state.userScoreRange[1];
        }

        if (state.minUserVote !== undefined) {
          queryParams["vote_count.gte"] = state.minUserVote;
        }

        if (state.movieLengthRange !== undefined) {
          queryParams["with_runtime.gte"] = state.movieLengthRange[0];
          queryParams["with_runtime.lte"] = state.movieLengthRange[1];
        }

        if (state.startDate !== null) {
          queryParams["primary_release_date.gte"] = state.startDate
            .toISOString()
            .split("T")[0];
        }
        if (state.endDate !== null) {
          queryParams["primary_release_date.lte"] = state.endDate
            .toISOString()
            .split("T")[0];
        }

        console.log("Endpoint:", endpoint);

        const response = await apiInstance.get(endpoint, {
          params: queryParams,
        });

        dispatch({ type: "SET_MOVIES", payload: response.data.results });
        dispatch({
          type: "SET_TOTAL_PAGES",
          payload: response.data.total_pages,
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [
    state.currentPage,
    state.selectedGenre,
    state.sortBy,
    state.userScoreRange,
    state.minUserVote,
    state.movieLengthRange,
    state.endDate,
    state.startDate,
  ]);

  const handlePageChange = (page) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handleGenreSelect = (genreId) => {
    dispatch({ type: "SET_SELECTED_GENRE", payload: genreId });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 }); // Reset page to 1 when a new genre is selected
  };

  const handleSortChange = (sortOption) => {
    console.log("Selected sorting option:", sortOption);
    dispatch({ type: "SET_SORT_BY", payload: sortOption });
  };

  const onUserScoreChange = (value) => {
    dispatch({ type: "SET_USER_SCORE_RANGE", payload: value });
  };

  const onUserVoteChange = (value) => {
    dispatch({ type: "SET_MIN_USER_VOTE", payload: value });
  };

  const onMovieLengthChange = (value) => {
    dispatch({ type: "SET_MOVIE_LENGTH_RANGE", payload: value });
  };

  const handleStartDateChange = (startDate) => {
    dispatch({ type: "SET_START_DATE", payload: startDate });
  };

  const handleEndDateChange = (endDate) => {
    dispatch({ type: "SET_END_DATE", payload: endDate });
  };

  return (
    <div className="tvshows-body">
      <Header />
      <div className="container movies-heading">
        <h1>TV Shows</h1>
        <SortGenre
          handleGenreSelect={handleGenreSelect}
          handleSortChange={handleSortChange}
        />
      </div>

      <div className="container movies-container">
        <div className="movies-sidebar col-md-2">
          <MovieSidebar
            onUserScoreChange={onUserScoreChange}
            onUserVoteChange={onUserVoteChange}
            onMovieLengthChange={onMovieLengthChange}
            onStartDateChange={handleStartDateChange}
            onEndDateChange={handleEndDateChange}
          />
        </div>
        {loading ? (
          <div className="loading-spinner">
            <BeatLoader color="#36d7b7" size={30} />
          </div>
        ) : (
          <div className="movies-list-pagination col-md-10">
            <div className="movies-list">
              {state.movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  class="grid-item"
                  title={movie.name}
                  overview={movie.overview}
                  img={movie.poster_path}
                ></MovieCard>
              ))}
            </div>
            <div className="pagination">
              <PaginationCard
                currentPage={state.currentPage}
                totalPages={state.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TVShows;
