import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Landing } from './'

const styles = theme => ({
  root: {
    boxSizing: 'border-box',
    minHeight: '100vh',
    paddingTop: theme.mixins.toolbar.minHeight + 8,
    paddingLeft: theme.spacing.unit * 7 + 1,
  },
})

const View = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Landing />
    </div>
  )
}

View.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(View)
