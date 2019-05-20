import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import HomeIcon from '@material-ui/icons/Home'
import LocalMoviesIcon from '@material-ui/icons/LocalMovies'
import classNames from 'classnames'

const drawerWidth = 240
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    backgroundColor: theme.palette.background.paper,
    flexShrink: 0,
    width: drawerWidth,
    whiteSpace: 'nowrap',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerSubtitleVisible: {
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 4}px`,
    transition: theme.transitions.duration.leavingScreen,
    opacity: 1,
  },
  drawerSubtitle: {
    opacity: 0,
    transition: theme.transitions.duration.leavingScreen,
  },
  hide: {
    display: 'none',
  },
  linkTo: {
    textDecoration: 'none',
  },
  menuButton: {
    marginLeft: 5,
    marginRight: 36,
  },
  movieTrackerIcon: {
    color: '#42dbff',
  },
  swapiBoxIcon: {
    width: 24,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
})

const View = ({ classes, children }) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(prev => !prev)

  return (
    <>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            onClick={toggleDrawer}
            className={classNames(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        variant="permanent"
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <Typography
            className={
              open ? classes.drawerSubtitleVisible : classes.drawerSubtitle
            }
            color="textSecondary"
          >
            Projects
          </Typography>
          <a
            href="https://chris023.github.io/movie-tracker-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkTo}
          >
            <ListItem button>
              <ListItemIcon>
                <LocalMoviesIcon className={classes.movieTrackerIcon} />
              </ListItemIcon>
              <ListItemText primary={'Movie Tracker'} />
            </ListItem>
          </a>
          <a
            href="https://chris023.github.io/swapibox"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkTo}
          >
            <ListItem button>
              <ListItemIcon>
                <img
                  className={classes.swapiBoxIcon}
                  src="https://raw.githubusercontent.com/chris023/swapibox/master/src/assets/readme/logo.png"
                />
              </ListItemIcon>
              <ListItemText primary={'SWAPIbox'} />
            </ListItem>
          </a>
        </List>
      </Drawer>
      {children}
    </>
  )
}

View.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
}

export default withStyles(styles)(View)
