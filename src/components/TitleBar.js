import React from 'react'
import { Typography } from '@material-ui/core'

function TitleBar({ text='Forgot Text', size='h4', style={} }) {
  return (
    <div style={{...styles.container, ...style}}>
      <Typography variant={size} noWrap style={styles.text}>
        { text }
      </Typography>
    </div>
  )
}

export default TitleBar

const styles = {
  container: {
    backgroundColor: '#FF5555',
    padding: 20,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
}