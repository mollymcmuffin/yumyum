import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Box,
} from "@material-ui/core";
import { RestaurantRounded } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";

const RandomRecipe = () => {
  const apiKey = "2f076c0abb5c4b01882eb35eccc62b16";
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
  const [recipe, setRecipe] = useState([]);
  const classes = useStyles();

  //   useEffect(() => {
  //     axios
  //       .get(URL)
  //       .then(function (response) {
  //         // handle success

  //         const data = response.data.recipes;

  //         setRecipe(data[0]);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .then(function () {
  //         // always executed
  //       });
  //   }, []);

  return (
    <>
      <Grid
        container
        className={classes.container}
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={3}
      >
        <Typography align="center" variant="h2">
          YUM YUM!
        </Typography>
        <Typography align="center" variant="h2">
          Random Recipe
        </Typography>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            startIcon={<RestaurantRounded />}
          >
            <Typography>GENERATE!</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    border: "solid",
    height: "100vh",
  },
}));

export default RandomRecipe;
