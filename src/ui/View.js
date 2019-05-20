import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Link,
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
import PersonIcon from '@material-ui/icons/Person'
import classNames from 'classnames'
import LinkedInIcon from '../assets/img/In-White-96.png'
import GithubIcon from '../assets/img/GitHub-Mark-Light-64px.png'
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
  customIconContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 24,
    justifyContent: 'center',
    width: 24,
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
    boxSizing: 'border-box',
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 4}px`,
    transition: `${theme.transitions.duration.enteringScreen}ms`,
    opacity: 1,
    height: 37,
  },
  drawerSubtitle: {
    boxSizing: 'border-box',
    height: 0,
    opacity: 0,
    transition: `${theme.transitions.duration.enteringScreen}ms`,
  },
  hide: {
    display: 'none',
  },
  linkTo: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menuButton: {
    marginLeft: 5,
    marginRight: 36,
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main,
  },
  toolbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.primary.main,
  },
  toolbarBackground: {
    backgroundColor: theme.palette.primary.light,
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
        <Toolbar disableGutters={!open} className={classes.toolbar}>
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
          <div
            className={classNames(
              classes.toolbarContainer,
              classes.toolbarBackground
            )}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List className={classes.list}>
            <Typography
              className={
                open ? classes.drawerSubtitleVisible : classes.drawerSubtitle
              }
              color="textSecondary"
            >
              Links
            </Typography>
            {['Home', 'About Me'].map((title, i) => (
              <Link
                to={`/${title
                  .toLowerCase()
                  .split(' ')
                  .join('')}`}
                className={classes.linkTo}
                key={title + i}
              >
                <ListItem button disabled={i === 1}>
                  <ListItemIcon>
                    <>
                      {i === 0 ? <HomeIcon /> : null}
                      {i === 1 ? <PersonIcon /> : null}
                    </>
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
            {[
              {
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/chris023/',
                icon: LinkedInIcon,
                alt: 'In',
              },
              {
                title: 'Github',
                link: 'https://www.github.com/chris023/',
                icon: GithubIcon,
                alt: 'Gh',
              },
            ].map(item => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkTo}
                key={item.title}
              >
                <ListItem button>
                  <ListItemIcon>
                    <div className={classes.customIconContainer}>
                      <img
                        src={item.icon}
                        alt={item.alt}
                        style={{ width: 16 }}
                      />
                    </div>
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </a>
            ))}
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
          <Divider />
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
