import { useContext, useState } from "react";
import classes from "./modal.module.css";
import { userContext } from "../../mainLayout/mainLayout";
import Location from "../location/location";
const Modal = ({}) => {
  const [defaultValue, setDefaultValue] = useState("");
  const { cartItems, AddToCart, removeFromCart, toggleModal } =
    useContext(userContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const BankCharges = itemsPrice * 0.14;
  const Delivery = defaultValue;
  const totalPrice = itemsPrice + BankCharges + Delivery;
  return (
    <>
      <div className={classes.main}>
        <div className={classes.modalContainer}>
          <div className={classes.length}>
            {cartItems.length === 0 && (
              <div>
                <p>cart is empty</p>
              </div>
            )}
          </div>
          <div>
            {cartItems.map((items) => (
              <ModalCart
                AddToCart={AddToCart}
                removeFromCart={removeFromCart}
                items={items}
                key={items.id}
              />
            ))}
          </div>
          {cartItems.length !== 0 && (
            <div className={classes.amount}>
              <hr />
              <div className={classes.totalPrice}>
                <p>item price</p>${itemsPrice.toFixed(2)}
              </div>
              <div className={classes.totalPrice}>
                <p>Bank price</p>${BankCharges.toFixed(2)}
              </div>
              <div className={classes.totalPrice}>
                <p>Delivery</p>${Delivery}
              </div>
              <Location
                defaultValue={defaultValue}
                setDefaultValue={setDefaultValue}
              />
              <div className={classes.totalPrice}>
                <p className={classes.total}>Total Amount</p>
                <p className={classes.totalAmt}> ${Math.floor(totalPrice)}</p>
              </div>
              <div className={classes.btnContainer}>
                <button onClick={toggleModal}>close</button>
                <button>order</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
const ModalCart = ({ AddToCart, removeFromCart, items, key }) => {
  return (
    <>
      <div key={key} className={classes.items}>
        <div className={classes.content}>
          <p className={classes.name}>{items.name}</p>
          <div className={classes.price}>
            <p>${items.price}</p>
            <p>x{items.qty}</p>
          </div>
        </div>
        <div className={classes.qty}>
          <button onClick={() => AddToCart(items)}>+</button>
          <button onClick={() => removeFromCart(items)}>-</button>
        </div>
      </div>
      <div>{/* ${items.price.toFixed(2)} */}</div>
    </>
  );
};
