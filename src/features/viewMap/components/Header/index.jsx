import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import useStyles from "./styles.js";

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          TestMap
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Search
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
