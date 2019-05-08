/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Paper, Typography, withStyles } from '@material-ui/core'
import bgvid from '../../assets/media/bgvid.webm'
import coffeeLaptopOnlyImg from '../../assets/img/coffee-laptop-only.png'
import backgroundImg from '../../assets/img/landing-bg.jpg'

const styles = theme => ({
  root: {
    background: 'none',
    boxSizing: 'border-box',
    height: 'calc(100vh - 64px)',
    padding: theme.spacing.unit * 4,
    position: 'relative',
  },
  backgroundColor: {
    backgroundColor: theme.palette.background.paper,
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: -5,
  },
  backgroundImage: {
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    bottom: 0,
    position: 'absolute',
    height: '100%',
    right: 0,
    width: '100%',
  },
  backgroundImageFull: {
    zIndex: -15,
  },
  bgvid: {
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    filter: 'opacity(.5)',
    height: 'auto',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    position: 'fixed',
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    width: 'auto',
    zIndex: -10,
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    borderColor: '#42dbff',
    color: '#42dbff',
    letterSpacing: 2,
    marginTop: theme.spacing.unit * 4,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100%',
  },
  textDecoration: {
    textShadow: `-4px 3px ${theme.palette.secondary.main},
    -2px 1px ${theme.palette.secondary.main},
    -1px 0px ${theme.palette.secondary.main},
    -3px 2px ${theme.palette.secondary.main}`,
  },
  title: {
    fontFamily: 'Coolvetica',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing.unit * 4,
  },
})

const Landing = ({ classes }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${coffeeLaptopOnlyImg})` }}
        className={classes.backgroundImage}
      />
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={`${classes.backgroundImage} ${classes.backgroundImageFull}`}
      />
      <Paper square className={classes.root}>
        <video playsInline autoPlay muted loop className={classes.bgvid}>
          <source src={bgvid} type="video/webm" />
        </video>
        <div className={classes.content}>
          <div className={classes.titleContainer}>
            <div>
              <Typography variant="h2" className={classes.title}>
                Hi,
              </Typography>
              <Typography variant="h2" className={classes.title}>
                I'm <span className={classes.textDecoration}>Chris</span>,
              </Typography>
              <Typography variant="h2" className={classes.title}>
                web developer.
              </Typography>
              <Button variant="outlined" className={classes.button}>
                Contact Me
              </Button>
            </div>
          </div>
          <div />
        </div>
      </Paper>
    </>
  )
}

Landing.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Landing)
