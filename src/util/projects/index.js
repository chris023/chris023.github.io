import React from 'react'
import LocalMoviesIcon from '@material-ui/icons/LocalMovies'

export const swapibox = {
  name: 'SWAPI Box',
  liveUrl: 'https://chris023.github.io/swapibox',
  gitUrl: '',
  icon: (
    <img
      style={{
        width: 24,
      }}
      alt="SW"
      src="https://raw.githubusercontent.com/chris023/swapibox/master/src/assets/readme/logo.png"
    />
  ),
}

export const movietracker = {
  name: 'Movie Tracker',
  liveUrl: 'https://chris023.github.io/movie-tracker-frontend',
  gitUrl: '',
  icon: (
    <LocalMoviesIcon
      style={{
        color: '#42dbff',
      }}
    />
  ),
}
