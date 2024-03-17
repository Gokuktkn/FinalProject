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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
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
      </AuthContext.Provider>
    </LocalizationProvider>
  );
}

export default App;
