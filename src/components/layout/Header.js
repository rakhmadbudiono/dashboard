import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  Container
} from "@material-ui/core";

import logoutImage from "assets/logout.png";
import profileImage from "assets/profile.svg";
import logoImage from "assets/logo.jpg";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#5B5B5B",
    marginTop: "1vw",
    display: "flex",
    width: "-webkit-fill-available"
  },
  logout: {
    height: "15px",
    width: "15px",
    marginLeft: "1vw",
    marginRight: "1vw"
  },
  profile: {
    height: "32px",
    width: "32px",
    marginRight: "1vw"
  },
  bigLogo: {
    height: "auto",
    width: "129px",
    borderRadius: "0px",
    margin: "1vw"
  },
  smallLogo: {
    height: "auto",
    width: "72px",
    borderRadius: "0px",
    marginLeft: "10px",
    objectFit: "contain"
  },
  appBar: {
    backgroundColor: "white",
    height: "64px",
    zIndex: 1
  },
  userDetails: {
    color: "black",
    textAlign: "end",
    padding: "0px"
  },
  username: {
    color: "#727272",
    margin: "1vw",
    marginBottom: "0px",
    fontSize: "19px"
  },
  companyName: {
    color: "#727272",
    margin: "1vw",
    marginTop: "0vw",
    fontSize: "14px"
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Avatar
          edge="start"
          alt="Logo"
          src={logoImage}
          className={classes.bigLogo}
        />
        <Typography className={classes.title}>
          powered by
          <img
            edge="start"
            alt="Logo"
            src={logoImage}
            className={classes.smallLogo}
          />
        </Typography>

        <Container className={classes.userDetails}>
          <h4 className={classes.username}>Username</h4>
          <p className={classes.companyName}>Company Name</p>
        </Container>
        <Avatar
          variant="rounded"
          alt="Profile"
          src={profileImage}
          className={classes.profile}
        />
        <Avatar
          variant="square"
          alt="Logout"
          src={logoutImage}
          className={classes.logout}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
