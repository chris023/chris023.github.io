/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    boxSizing: 'border-box',
    height: 'calc(100vh - 64px)',
    padding: theme.spacing.unit * 4,
  },
})

const Landing = ({ classes }) => {
  return (
    <Paper square className={classes.root}>
      <Typography variant="h2">Hi,</Typography>
      <Typography variant="h2">I'm Chris</Typography>
    </Paper>
  )
}

Landing.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Landing)
