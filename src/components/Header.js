import React from 'react'
import PhoneNumber from './PhoneNumber'

const AppLogoText = require('../resources/images/AppLogoText.jpeg')

function Header() {
    return (
        <div style={styles.container}>
            <img src={AppLogoText} style={styles.logoImage} alt='' />
            <PhoneNumber number={'0151 123 4567'} size='h4'/>
        </div>
    )
}

export default Header

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,

        boxShadow: '0px 10px 10px -11px #00000075',
        backgroundColor: '#FFF',
        borderBottom: '3px solid #FF0000'
    },
    logoImage: {
        width: 175,
        marginBottom: 10
    }
}