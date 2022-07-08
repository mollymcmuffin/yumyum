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
} from "@material-ui/core";
import { RestaurantRounded } from "@material-ui/icons";
import RandomRecipe from "./components/RandomRecipe";

function App() {
  return (
    <>
      <CssBaseline />
      <RandomRecipe />
    </>
  );
}

export default App;
