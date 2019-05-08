/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Paper, Typography, withStyles } from '@material-ui/core'
import bgvid from '../../assets/bgvid.webm'

const styles = theme => ({
  root: {
    background: 'none',
    boxSizing: 'border-box',
    height: 'calc(100vh - 64px)',
    padding: theme.spacing.unit * 4,
  },
  bgvid: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    transform: 'translateX(-50%) translateY(-50%)',
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    zIndex: -10,
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    borderColor: '#0fc7ac',
    color: '#0fc7ac',
    letterSpacing: 2,
    marginTop: theme.spacing.unit * 4,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100%',
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
              I'm Chris,
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
  )
}

Landing.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Landing)
