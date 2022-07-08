import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { RestaurantRounded } from "@material-ui/icons";

const RandomRecipe = () => {
  const apiKey = "2f076c0abb5c4b01882eb35eccc62b16";
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
  const [recipe, setRecipe] = useState([]);

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
      <Typography align="center" variant="h2">
        YUM YUM!
      </Typography>
      <Typography align="center" variant="h2">
        Random Recipe
      </Typography>
      <Button variant="contained">Contained</Button>
    </>
  );
};

export default RandomRecipe;
