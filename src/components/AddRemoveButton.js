import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'

function AddRemoveButton(props) {
  const { initialValue = 0, step = 1 } = props
  let [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(props.initialValue)
  },[props.initialValue])

  const increment = () => {
    props.onIncrement && props.onIncrement()
    setValue(value + step)
  }

  const decrement = () => {
    props.onDecrement && props.onDecrement()
    if (value) {
      setValue(value - step)
    }
  }

  return (
    <div style={styles.container}>
      {!!value && (
        <Button
          onClick={decrement}
          variant={value > 1 ? 'outlined' : 'text'}
          color="secondary"
          style={styles.button}
        >
          {value > 1 ? '-' : 'Remove'}
        </Button>
      )}

      <Button
        onClick={increment}
        variant={value ? 'outlined' : 'text'}
        color="primary"
        style={styles.button}
      >
        {value ? '+' : 'Add'}
      </Button>
    </div>
  )
}

export default AddRemoveButton


const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    margin: 5,
  },
  value: {
    textAlign: 'center'
  }
}