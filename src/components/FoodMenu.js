import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import FoodMenuItem from './FoodMenuItem'
import TitleBar from './TitleBar'
import './css/FoodMenu.css'

const categoryImages = {
    pizza: require('../resources/images/food/categories/pizzas.jpg'),
    kebabs: require('../resources/images/food/categories/kebabs.jpg'),
    dessert: require('../resources/images/food/categories/dessert.jpg'),
    drinks: require('../resources/images/food/categories/drinks.jpg'),
}

const menu = {
    pizza: [{
        name: 'Beef Sizzler',
        price: 11.99,
        image: require('../resources/images/food/pizza/beef-sizzler.jpg')
    }, {
        name: 'Meaty One',
        price: 14.49,
        image: require('../resources/images/food/pizza/meaty-one.jpg')
    }, {
        name: 'Pepperoni Feast',
        price: 9.99,
        image: require('../resources/images/food/pizza/pepperoni-feast.jpg')
    }, {
        name: 'Vegetable Supreme',
        price: 7.99,
        image: require('../resources/images/food/pizza/vegetable-supreme.jpg')
    }],
    dessert: [{
        name: 'Ben & Jerries: Peanut Buttercup (500ml)',
        price: 5.49,
        image: require('../resources/images/food/dessert/benandjerries-peanut.png')
    }, {
        name: 'Ben & Jerries: Netflix n\' Chill (500ml)',
        price: 5.49,
        image: require('../resources/images/food/dessert/benandjerries-netflix.png')
    }],
    kebabs: [{
        name: 'Shish Kebab',
        price: 6.99,
        image: require('../resources/images/food/kebabs/shish-kebab.jpg')
    }],
    drinks: [{
        name: 'Coca Cola (330ml)',
        price: 1.25,
        image: require('../resources/images/food/drinks/coke.jpg')
    }, {
        name: 'Fanta (330ml)',
        price: 0.75,
        image: require('../resources/images/food/drinks/fanta.jpg')
    }]
}


function FoodMenu() {
    return (
        <div style={styles.container}>
            <TitleBar text='Our Menu' />

            <Card>
                <CardContent>
                    {Object.keys(menu).map(menuCategory => (
                        <div style={styles.category}>
                            <div style={{ ...styles.categoryHeader }}>
                                <Typography variant={'h5'} noWrap style={styles.categoryName}>
                                    {menuCategory.toUpperCase()}
                                </Typography>

                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className='fadeInFromLeftEdge'>
                                    </div>
                                    <img
                                        src={categoryImages[menuCategory]}
                                        style={styles.categoryImage}
                                    />
                                </div> 
                            </div>

                            {menu[menuCategory].map((menuItem, i) =>
                                <FoodMenuItem key={i} food={menuItem} />
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>

           
        </div>
    )
}

export default FoodMenu

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
  
    category: {
        margin: 10
    },
    categoryHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 30,
        boxShadow: '1px 3px 3px #00000010'
    },
    categoryImage: {
        width: 150,
        borderRadius: 5,
    },
    categoryName: {
        fontWeight: 'bold'
    }
}