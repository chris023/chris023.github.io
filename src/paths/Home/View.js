import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Landing } from './'

const styles = theme => ({
  root: {
    boxSizing: 'border-box',
    minHeight: '100vh',
    paddingTop: theme.mixins.toolbar.minHeight + 8,
    paddingLeft: theme.spacing.unit,
  },
})

const View = ({ classes, setOpen }) => {
  return (
    <div className={classes.root}>
      <Landing setOpen={setOpen} />
    </div>
  )
}

View.propTypes = {
  classes: PropTypes.object,
  setOpen: PropTypes.func,
}

export default withStyles(styles)(View)
