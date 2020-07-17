import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { emptyBasket } from '../store/actions/basket'
import { Typography, Button, Badge } from '@material-ui/core'
import { Fastfood, ShoppingBasket, DeleteOutline } from '@material-ui/icons'
import TitleBar from './TitleBar'

const placeholderImage = require('../resources/images/empty-cart.png')

function groupByName(products) {
  if (!products.length) {
    return {}
  }

  console.log('[Basket] groupByName() products: ', products)
  return products.reduce((groups, product) => {
    groups[product.name]
      ? groups[product.name].push(product)
      : groups[product.name] = [product]

    return groups
  }, {})
}

function checkout() {
  alert('not added')
}

function Basket(props) {
  const [groupedProducts, setGroupedProducts] = useState({})

  useEffect(() => {
    console.log('[Basket] Products Changed: Regrouping... ', props.basket.products)
    const groupings = groupByName(props.basket.products)
    console.log('[Basket] Products Changed: New Groups: ', groupings)
    setGroupedProducts(groupings)
  }, [props.basket.products])

  return (
    <div style={styles.container}>
      <TitleBar text={`Basket`}
        iconLeft={(
          <ShoppingBasket style={{ color: '#FFF', marginRight: 10 }} />
        )}
      />

      <div style={styles.content}>

        {Object.keys(groupedProducts).map(group => (
          <div style={{ display: 'flex', padding: 20, borderBottom: '1px solid #FFAAAA50' }}>
            <Typography key={group} noWrap style={{ paddingLeft: 20 }}>
              {group} {groupedProducts[group].length > 1 ? `x${groupedProducts[group].length}` : ''}
            </Typography>
          </div>
        ))}


        {!!!props.basket.products.length && (
          <div style={styles.emptyBasketImageContainer}>
            <img
              src={placeholderImage}
              style={{ width: 200 }}
              alt=''
            />
          </div>
        )}

        {!!props.basket.totalPrice && (
          <TitleBar text={`£${props.basket.totalPrice}`} size='h5' style={{ marginBottom: 10 }} />
        )}

        <Button
          onClick={checkout}
          variant='contained'
          color="primary"
          style={styles.button}
        >
          Checkout
          {props.basket.products.length ? (
            <Badge badgeContent={props.basket.products.length} color="secondary" style={styles.badge}>
              <Fastfood color='#000' />
            </Badge>
          ) : (
            <Fastfood color='#FFF' style={{ position: 'absolute', right: 10, opacity: 0.5 }} />
          )}
        </Button>
        <Button
          onClick={props.emptyBasket}
          variant='contained'
          color="secondary"
          style={styles.button}
        >
          Empty Basket
      </Button>

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    basket: state.basket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emptyBasket: () => {
      dispatch(emptyBasket())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  emptyBasketImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    marginTop: 5,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 10
  }
}