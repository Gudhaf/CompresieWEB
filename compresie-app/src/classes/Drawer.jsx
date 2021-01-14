import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import '../css/style.css';

const useStyles = makeStyles({
  root: {
    background: '#2c3438',
    width: "190px",
    boxShadow: '8px 1px 19px -4px rgba(0,0,0,0.5)'
  },
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const handleClick = (pathname) => history.push(`/${pathname}`);
  const infoOptions = [
    {
      text: "Proiect"
    },
    {
      text: "Compresie"
    },
    {
      text: "Istoric"
    }
  ];
  const compressionOptions = [
    {
      text: "Foto"
    },
    {
      text: "Audio"
    },
    {
      text: "Video"
    }
  ];
  const demoOptions = [
    {
      text: "HuffmanDemo"
    }
  ];
  return (
      <div>
        <MUIDrawer variant="permanent" classes={{paper:classes.root}}>
        <p class='drawer title'>Informații</p>
        <List>
            {infoOptions.map(item => {
            const { text } = item;
            return (
                <ListItem 
                  button key={text} 
                  onClick={() => handleClick(text)} 
                  selected={window.location.pathname.includes(text)}
                >
                 <p class='drawer'>{text}</p>
                </ListItem>
            );
            })}
        </List>
        <Divider />
        <p class='drawer title'>Compresie</p>
        <List>
            {compressionOptions.map(item => {
            const { text } = item;
            return (
              <ListItem 
                button key={text} 
                onClick={() => handleClick(text)} 
                selected={window.location.pathname.includes(text)}
              >
                 <p class='drawer'>{text}</p>
                </ListItem>
            );
            })}
        </List>
        <Divider />
        <List>
            {demoOptions.map(item => {
            const { text } = item;
            return (
              <ListItem 
                button key={text} 
                onClick={() => handleClick(text)} 
                selected={window.location.pathname.includes(text)}
              >
                <p class='drawer'>{text}</p>
                </ListItem>
            );
            })}
        </List>
        </MUIDrawer>
      </div>
    
  );
};

export default withRouter(Drawer);
