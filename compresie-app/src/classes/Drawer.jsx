import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import '../css/style.css'

const useStyles = makeStyles({
  root: {
    background: '#2c3438',
    width: "190px",
    boxShadow: '8px 1px 19px -4px rgba(0,0,0,0.5)',
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const infoOptions = [
    {
      text: "Proiect",
      onClick: () => history.push("/")
    },
    {
      text: "Compresie",
      onClick: () => history.push("/Compresie")
    },
    {
      text: "Istoric",
      onClick: () => history.push("/Istoric")
    }
  ];
  const compressionOptions = [
    {
      text: "Foto",
      onClick: () => history.push("/Foto")
    },
    {
      text: "Audio",
      onClick: () => history.push("/Audio")
    },
    {
      text: "Video",
      onClick: () => history.push("/Video")
    }
  ];
  const demoOptions = [
    {
      text: "Huffman Demo",
      onClick: () => history.push("/HuffmanDemo")
    }
  ];
  return (
      <div>
        <MUIDrawer variant="permanent" classes={{paper:classes.root}}>
        <p class='drawer title'>{'Informații'}</p>
        <List>
            {infoOptions.map((item, index) => {
            const { text, onClick } = item;
            return (
                <ListItem button key={text} onClick={onClick}>
                 <p class='drawer'>{text}</p>
                </ListItem>
            );
            })}
        </List>
        <Divider />
        <p class='drawer title'>{'Compresie'}</p>
        <List>
            {compressionOptions.map((item, index) => {
            const { text, onClick } = item;
            return (
                <ListItem button key={text} onClick={onClick}>
                 <p class='drawer'>{text}</p>
                </ListItem>
            );
            })}
        </List>
        <Divider />
        <List>
            {demoOptions.map((item, index) => {
            const { text, onClick } = item;
            return (
                <ListItem button key={text} onClick={onClick}>
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
