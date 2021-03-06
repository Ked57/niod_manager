import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./top-bar.css";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = () => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuItem: {
    paddingRight: 200
  },
  grow: {
    flexGrow: 1
  }
});

const TopBar = props => {
  const { classes } = props;
  const [sidePanel, setSidePanel] = useState(false);

  const onMenuButtonClick = () => setSidePanel(!sidePanel);

  return (
    <AppBar position="static">
      <Drawer open={sidePanel} onClose={onMenuButtonClick}>
        <div tabIndex={0} role="button" onClick={onMenuButtonClick}>
          <List>
            <a href="/">
              <ListItem button key={"Home"} className={classes.menuItem}>
                <ListItemText primary={"Home"} />
              </ListItem>
            </a>
          </List>
          <Divider />
          <List>
            {["Dashboard"].map((text, index) => (
              <a href={`/${text.toLowerCase()}`}>
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              </a>
            ))}
          </List>
          <Divider />
          <List>
            {["A2A Dispatcher", "Triggers", "Spawn in zone"].map(
              (text, index) => (
                <a href={`/${text.toLowerCase().replace(" ", "_")}`}>
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                </a>
              )
            )}
          </List>
        </div>
      </Drawer>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onMenuButtonClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          NIOD
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
