import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const login = localStorage.getItem("data");
  const loginData = JSON.parse(login);
  const imgageSrc = login ? loginData.image : null;

  const navigate = useNavigate();
  const turnToLoginPage = () => {
    navigate("/login");
  };

  // user menu pop up
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyListClick = () => {
    navigate("/mylist");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("data");
    navigate("/");
  };

  return (
    <div className="container-fluid header-container-fluid">
      <div className="container header">
        <div className="header-left">
          <div className="logo">
            <Link to={"/"}>
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="TMDB logo"
              />
            </Link>
          </div>
          <div className="tab">
            <Link to={"/movies"}>Movies</Link>
          </div>
          <div className="tab">
            <Link to={"/tvshows"}>TV Shows</Link>
          </div>
          <div className="tab">
            <Link to={"/mylist"}>My List</Link>
          </div>
        </div>
        {login ? (
          <div className="header-right">
            <p>Welcome, {loginData.firstName}</p>
            <div className="avatar" onClick={handleClick}>
              <img src={imgageSrc} alt="user-avatar" />
            </div>
            <div className="search">
              <IoSearch className="search-logo" />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleMyListClick();
                }}
              >
                My List
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleLogoutClick();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="header-right">
            <div className="login" onClick={turnToLoginPage}>
              Login
            </div>
            <div className="search">
              <IoSearch className="search-logo" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
