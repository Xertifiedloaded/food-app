import React, { useContext } from 'react'
import classes from './header.module.css'
import cartLogo from '../assets/images/cart.svg'
import { userContext } from '../mainLayout/mainLayout'
const Header = () => {
    const {toggleModal,cartItems}=useContext(userContext)
    return (
        <>
            <header>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <h2>Olaitan's food_meals</h2>
                    </div>
                    <nav>
                        <button onClick={toggleModal}>
                            <img src={cartLogo} alt="" />
                            <h3>Your Cart</h3>
                            <span>
                                {cartItems.length === 0 ? 0 : cartItems.length}
                            </span>
                        </button>

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header