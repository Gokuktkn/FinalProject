import "./App.css";
import { useState, useContext, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./pages/TVShows";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import NotFound from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Detail } from "./pages/Detail";
import "bootstrap/dist/css/bootstrap.min.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const AuthContext = createContext();
export const ToastContext = createContext();
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toastWatchlistAdded, setToastWatchlistMovieAdded] = useState(false);
  const [toastFavMovieAdded, setToastFavMovieAdded] = useState(false);
  const [toastWatchlistRemoved, setToastWatchlistMovieRemoved] =
    useState(false);
  const [toastFavMovieRemoved, setToastFavMovieRemoved] = useState(false);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <ToastContext.Provider
          value={{
            toastWatchlistAdded,
            setToastWatchlistMovieAdded,
            toastFavMovieAdded,
            setToastFavMovieAdded,
            toastWatchlistRemoved,
            setToastWatchlistMovieRemoved,
            toastFavMovieRemoved,
            setToastFavMovieRemoved,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvshows" element={<TVShows />} />
              <Route path="/mylist" element={<MyList />} />
              <Route path="/:id" element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ToastContext.Provider>
      </AuthContext.Provider>
    </LocalizationProvider>
  );
}

export default App;
