import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./app.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  menuList: {
    height: "100%"
  },
  oot: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paper: {
    margin: "10px"
  },
  primary: {},
  icon: {}
});

const App = props => {
  const { classes } = props;
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuButtonClick = () => setShowMenu(!showMenu);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleMenuButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            NIOD
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={24}>
        {showMenu ? (
          <Grid item xs>
            <Paper>
              <MenuList>
                <MenuItem className={classes.menuItem}>Home</MenuItem>
                <MenuItem className={classes.menuItem}>A2A Dispatcher</MenuItem>
                <MenuItem className={classes.menuItem}>Triggers</MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        ) : (
          <Grid item xs />
        )}
        <Grid item xs={8}>
          <Paper paper>
            <p>Here goes the content</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper paper>
            <p>Here goes the server status, it's fixed</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
