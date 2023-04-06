import { Outlet } from 'react-router-dom'
import classes from './mainLayout.module.css'
import Header from '../Ui/header'
import { createContext, useState } from 'react'
import { products } from '../constant'
import { LocationData } from '../constant'
export const userContext = createContext()
const MainLayout = () => {
    const [cartItems, setCartItems] = useState([])
    const [modal, setModal,] = useState(false)
    const [active, setActive] = useState(false)
    const toggle = () => {
        setActive(!active)
    }
    const toggleModal = () => {
        setModal(!modal)
    }

    const AddToCart = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }
    const removeFromCart = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    }

    return (
        <>
            <userContext.Provider
                value={{
                    products,
                    modal,
                    setModal,
                    toggleModal,
                    cartItems,
                    AddToCart,
                    removeFromCart,
                    Location,
                    toggle,
                    active,
                    setActive
                }}>
                <Header />
                <Outlet />
            </userContext.Provider>
        </>
    )
}

export default MainLayout;