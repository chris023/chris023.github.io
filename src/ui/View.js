import React from 'react'
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
import classNames from 'classnames'
import { movietracker, swapibox } from '../util/projects'

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
  content: {
    display: 'flex',
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
})

const View = ({ classes, children, open, setOpen }) => {
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
      <div className={classes.content}>
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
            <Link to="/home" className={classes.linkTo}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
            </Link>
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
            {[movietracker, swapibox].map(project => (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkTo}
                key={project.name}
              >
                <ListItem button>
                  <ListItemIcon>{project.icon}</ListItemIcon>
                  <ListItemText primary={project.name} />
                </ListItem>
              </a>
            ))}
          </List>
        </Drawer>
        {children}
      </div>
    </>
  )
}

View.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

export default withStyles(styles)(View)
