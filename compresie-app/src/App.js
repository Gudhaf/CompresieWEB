import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Drawer from "./classes/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Proiect  from "./classes/ProiectPage";
import Compresie from './classes/CompresiePage';
import Istoric from './classes/IstoricPage';
import Foto from './classes/FotoPage';
import Audio from './classes/AudioPage';
import Video from './classes/VideoPage';
import Huffman from './classes/HuffmanPage';
const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>  
      <Drawer />
      <Switch>
        <div class='margin'>
            <Route exact path="/" render={props => <Proiect {...props} />} />
            <Route exact path="/Compresie" render={props => <Compresie {...props} />} />
            <Route exact path="/Istoric" render={props => <Istoric {...props} />} />
            <Route exact path="/Foto" render={props => <Foto {...props} />} />
            <Route exact path="/Audio" render={props => <Audio {...props} />} />
            <Route exact path="/Video" render={props => <Video {...props} />} />
            <Route exact path="/HuffmanDemo" render={props => <Huffman {...props} />} />
        </div>
      </Switch>
      </Router>
    </div>
  );
}