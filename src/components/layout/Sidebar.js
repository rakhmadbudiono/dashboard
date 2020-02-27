import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import { Menu, ChevronLeft } from "@material-ui/icons";

import marketImage from "assets/drawer/market.svg";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  flexEnd: {
    placeContent: "flex-end"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 0
  },
  drawerOpen: {
    width: drawerWidth,
    zIndex: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    zIndex: 0,
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: "72px"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  menuButton: {
    marginTop: "1vh",
    placeContent: "center"
  },
  marketImage: {
    width: "17px"
  },
  toolbar: theme.mixins.toolbar
}));

const Sidebar = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <div className={classes.toolbar}></div>
      <List>
        <ListItem className={classes.flexEnd}>
          {!open ? (
            <ListItemIcon
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
            >
              <Menu />
            </ListItemIcon>
          ) : (
            <ListItemIcon
              edge="end"
              onClick={handleDrawerClose}
              className={(classes.menuButton, classes.flexEnd)}
            >
              <ChevronLeft />
            </ListItemIcon>
          )}
        </ListItem>
      </List>
      <List>
        <ListItem button key={"Market"}>
          <ListItemIcon>
            <img
              src={marketImage}
              alt="Market"
              className={classes.marketImage}
            />
          </ListItemIcon>
          <ListItemText primary={"Market"} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
