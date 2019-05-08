import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  withStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const styles = () => ({
  drawer: {
    width: 240,
  },
})

const View = ({ classes }) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(prev => !prev)

  return (
    <>
      <AppBar color="primary">
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </Drawer>
    </>
  )
}

View.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(View)
