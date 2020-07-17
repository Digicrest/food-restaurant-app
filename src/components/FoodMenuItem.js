import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addProductToBasket, removeProductFromBasket } from '../store/actions/basket'
import { Typography, Badge } from '@material-ui/core'
import { Fastfood } from '@material-ui/icons'
import AddRemoveButton from './AddRemoveButton'


// const defaults = {
//     sauces: [],
//     toppings: [],
//     size: 'h6'
// }

const placeholderImage = require('../resources/images/food/placeholder.png')

function FoodMenuItem(props) {
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        // count how many of this product are in the basket
        const matchingProductsInBasket = props.products.filter(product => product.name === props.food.name)
        setQuantity(matchingProductsInBasket.length)
    }, [props.products, props.food.name])

    const addFoodToBasket = () => {
        console.log(`[FoodMenuItem] addFoodToBasket()`)
        props.addProductToBasket(props.food)
    }

    const removeFoodFromBasket = () => {
        console.log(`[FoodMenuItem] removeFoodToBasket()`)
        props.removeProductFromBasket(props.food)
    }

    return (
        <div style={styles.container}>
            <div style={styles.foodPreview}>
                <img
                    alt={'Food Item'}
                    src={props.food.image || placeholderImage}
                    style={styles.foodPreviewImage}
                />

                <div style={styles.foodPreviewText}>
                    <Typography noWrap style={styles.foodPreviewName}>
                        {props.food.name}
                        { !!quantity && ` x${quantity}` }
                    </Typography>

                    <Typography noWrap style={styles.foodPreviewPrice}>
                        £ {props.food.price}
                    </Typography>
                </div>
            </div>


            <AddRemoveButton
                onIncrement={addFoodToBasket}
                onDecrement={removeFoodFromBasket}
                initialValue={quantity}
            />

            {!!quantity && (
                <Badge badgeContent={quantity} color="secondary" style={styles.badge}>
                    <Fastfood color='primary'/>
                </Badge>
            )}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToBasket: product => {
            dispatch(addProductToBasket(product))
        },
        removeProductFromBasket: product => {
            dispatch(removeProductFromBasket(product))
        }
    }
}

const mapStateToProps = state => {
    return {
        products: state.basket.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodMenuItem)

const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottom: '1px solid #00000010',
        borderRadius: 5,
        margin: 15
    },
    foodPreview: {
        display: 'flex',
        alignItems: 'center'
    },
    foodPreviewImage: {
        width: 100,
        borderRadius: 10,
        marginRight: 10
    },
    foodPreviewName: {
        opacity: 0.7,
        fontWeight: 'bold'
    },
    foodPreviewPrice: {
        opacity: 0.6,
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 10
    }
}