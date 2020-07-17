import React from 'react'

import Header from '../components/Header'
import FoodMenu from '../components/FoodMenu'
import Basket from '../components/Basket'
import Restaurants from '../components/Restaurants'
import Loader from '../components/Loader'

function Home() {
    return (
        <div style={styles.container}>
            <Header />

            <div style={styles.content}>
                <div style={styles.restaurants}>
                    <Restaurants />
                </div>
                <div style={styles.foodMenu}>
                    <FoodMenu />
                </div>
                <div style={styles.basket}>
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default Home

const styles = {
    container: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    content: {
        display: 'flex',
        backgroundColor: '#00000030',
        padding: 20,
        marginTop: 10
    },
    restaurants: {
        flex: 1
    },
    foodMenu: {
        flex: 3,
        marginRight: 20,
        marginLeft: 20
    },
    basket: {
        flex: 1
    }
}
