import { CssBaseline } from "@material-ui/core";
import { RestaurantRounded } from "@material-ui/icons";
import RandomRecipe from "./components/RandomRecipe";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseline />
      <RandomRecipe />
    </>
  );
}

export default App;
