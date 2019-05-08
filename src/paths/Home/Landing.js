import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    height: '100%',
  },
})

const Landing = ({ classes }) => {
  return (
    <Paper className={classes.root}>
      <Typography variant="h2">Hi,</Typography>
      <Typography variant="h2">I'm Chris</Typography>
    </Paper>
  )
}

Landing.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Landing)
