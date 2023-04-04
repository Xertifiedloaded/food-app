import React, { useContext, useEffect, useState } from 'react'
import classes from './header.module.css'
import cartLogo from '../assets/images/cart.svg'
import { userContext } from '../mainLayout/mainLayout'
import open from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
const Header = () => {
    const { toggleModal, cartItems } = useContext(userContext)
    const [mobile, setMobile] = useState(false)
    const [desktop, setDesktop] = useState(window.innerWidth)
    useEffect(() => {
        const changeWidth = () => {
            setDesktop(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
    }, [])
    const toggleMobile = () => {
        setMobile(!mobile)
    }
    return (
        <>
            <header>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <h2>Olaitan's food_meals</h2>
                    </div>
                    <div className={classes.mobile} onClick={toggleMobile}>
                        {
                            mobile ? <img src={close} /> : <img src={open} />
                        }
                    </div>
                    {
                        (mobile || desktop > 600) &&
                        <nav>
                            <button onClick={toggleModal}>
                                <img src={cartLogo} alt="" />
                                <h3>Your Cart</h3>
                                <span>
                                    {cartItems.length === 0 ? 0 : cartItems.length}
                                </span>
                            </button>
                        </nav>

                    }
                </div>
            </header >
        </>
    )
}

export default Header