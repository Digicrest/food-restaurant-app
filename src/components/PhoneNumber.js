import React from 'react'
import { Typography } from '@material-ui/core'
import { Phone } from '@material-ui/icons'


const defaults = {
  number: 'Missing Phone Number',
  size: 'h6'
}

function PhoneNumber({ number = defaults.number, size = defaults.size }) {
  return (
    <div style={styles.phoneContainer}>
      <Phone style={styles.phoneIcon} fontSize="large" />

      <Typography variant={size} noWrap style={styles.phoneNumber}>
          {number}
      </Typography>
    </div>
  )
}

export default PhoneNumber

const styles = {
  phoneContainer: {
      display: 'flex',
      alignItems: 'center',
  },
  phoneIcon: {
      marginRight: '10px',
      color: '#F00'
  },
  phoneNumber: {
      fontWeight: 'bold'
  }
}