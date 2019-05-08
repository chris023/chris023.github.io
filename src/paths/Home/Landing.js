/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'
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
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontFamily: 'Coolvetica',
  },
})

const Landing = ({ classes }) => {
  return (
    <Paper square className={classes.root}>
      <video playsInline autoPlay muted loop className={classes.bgvid}>
        <source src={bgvid} type="video/webm" />
      </video>
      <div className={classes.content}>
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
        </div>
      </div>
    </Paper>
  )
}

Landing.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Landing)
