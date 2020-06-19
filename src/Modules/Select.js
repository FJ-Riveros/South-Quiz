import React from "react";
import { useMinimalSelectStyles } from "@mui-treasury/styles/select/minimal";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const MinimalSelect = (props) => {
  const {
    Players,
    setPlayers,
    Difficulty,
    setDifficulty,
    Category,
    setCategory,
  } = props;

  //Players event
  const handleChange = (event) => {
    setPlayers(event.target.value);
  };

  //Difficulty event
  const difficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  //Category event
  const categoryChange = (event) => {
    setCategory(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + minimalSelectClasses.icon}
      />
    );
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <>
      <div className="Settings-Players">
        <label> Players</label>
        <FormControl>
          <Select
            disableUnderline
            classes={{ root: minimalSelectClasses.select }}
            MenuProps={menuProps}
            IconComponent={iconComponent}
            value={Players}
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
      </div>

      <label>Difficulty</label>
      <FormControl>
        <Select
          disableUnderline
          classes={{ root: minimalSelectClasses.select }}
          MenuProps={menuProps}
          IconComponent={iconComponent}
          value={Difficulty}
          onChange={difficultyChange}
        >
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormControl>

      <label>Category</label>
      <FormControl>
        <Select
          disableUnderline
          classes={{ root: minimalSelectClasses.select }}
          MenuProps={menuProps}
          IconComponent={iconComponent}
          value={Category}
          onChange={categoryChange}
        >
          <MenuItem value={"Any"}>Any</MenuItem>
          <MenuItem value={"videoGames"}>Video Games</MenuItem>
          <MenuItem value={"Science & Nature"}>Science and Nature</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default MinimalSelect;
