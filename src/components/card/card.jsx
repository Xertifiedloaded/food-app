import { useContext } from 'react'
import classes from './card.module.css'
import { userContext } from '../../mainLayout/mainLayout'
import Modal from '../modal/modal'

const Card = () => {
    const { products, modal, AddToCart } = useContext(userContext)
    return (
        <>
            <div className={classes.main}>
                <ul>
                    {
                        products.map((product) => (
                            <li>
                                <CardItems AddToCart={AddToCart} product={product} key={product.id} />
                            </li>
                        ))
                    }
                </ul>
                <div className={classes.modal}>
                    {
                        modal ? <Modal />: null


                    }
                </div>

            </div>
        </>
    )
}

export default Card
const CardItems = ({ product, AddToCart }) => {
    return (
        <>
            <div className={classes.menu}>
                <div className={classes.list}>
                    <div className={classes.left}>
                        <h2>{product.name}</h2>
                        <p>$ {product.price}</p>
                    </div>
                    <div className={classes.right}>
                        <p>$ {product.price}</p>
                        <button onClick={() => AddToCart(product)}>
                            + Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}