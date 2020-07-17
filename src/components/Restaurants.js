import React from 'react'
import TitleBar from './TitleBar'
import { Button, Container, Typography } from '@material-ui/core'
import { RestaurantMenu } from '@material-ui/icons'

const things = [
  'Pizza Hut',
  'Dominoes',
  'Papa John\'s',
]

function Restaurants() {
  return (
    <div>
      <TitleBar text='Restaurants' />

      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
        { things.map(r => (
          <Button style={{ padding: 10, borderBottom: '1px solid #C0C0C050', justifyContent: 'flex-start', paddingLeft: 40, alignItems: 'center' }}>
            <RestaurantMenu style={{ color: '#FAA', position: 'absolute', left: 5 }}/>
            <Typography >
              {r}
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Restaurants
