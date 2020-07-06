import React from 'react'

import Logo from '../../img/logo.svg'

const Header = () => {
    return (
        <header className="Header">
            <img src={Logo} className="Header__logo" alt="Word Presence counselling with small circles around and stars"/>
        </header>
    )
}
export default Header