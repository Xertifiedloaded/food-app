import { useContext, useState } from "react";
import classes from "./modal.module.css";
import { userContext } from "../../mainLayout/mainLayout";
import Location from "../location/location";
const Modal = ({ items, key }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleName = (e) => {
    setName(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  const handleAddress = (e) => {
    setAddress(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(address);
    const WhatsAppUrl =
      "https://wa.me/2348168043011?text=" +
      `${defaultValue} + ${JSON.stringify(name)}+ "%0a" + ${JSON.stringify(address)} + ${JSON.stringify(cartItems)}` +
      "%0a";
    // console.log(cartItems);

    return window.open(WhatsAppUrl);
  };

  const [defaultValue, setDefaultValue] = useState("");
  const [initialLocation, setInitialLocation] = useState("");
  const { cartItems, AddToCart, removeFromCart, toggleModal } =
    useContext(userContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const BankCharges = 20;
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
                <p>Bank Charges</p>${BankCharges.toFixed(2)}
              </div>
              <div className={classes.totalPrice}>
                <p>Delivery Fee</p>
                {defaultValue === "" ? 0 : `$${defaultValue}`}
              </div>
              <Location
                defaultValue={defaultValue}
                setDefaultValue={setDefaultValue}
                initialLocation={initialLocation}
                setInitialLocation={setInitialLocation}
              />
              <form action="">
                <div className={classes.inputs}>
                  <legend>FullName</legend>
                  <input
                    name="name"
                    type="text"
                    value={name.name}
                    onChange={handleName}
                    placeholder="enter your Name"
                  />
                </div>
                <div className={classes.inputs}>
                  <legend>Address</legend>
                  <input
                    type="text"
                    name="location"
                    value={name.location}
                    onChange={handleAddress}
                    placeholder="enter proper description of your location"
                  />
                </div>
              </form>
              <div className={classes.totalPrice}>
                <p className={classes.total}>Total Amount</p>
                <p className={classes.totalAmt}> ${Math.floor(totalPrice)}</p>
              </div>

              <div className={classes.btnContainer}>
                <button onClick={toggleModal}>close</button>
                <button onClick={HandleSubmit}>order</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
const ModalCart = ({ AddToCart, removeFromCart, items, key, price }) => {
  return (
    <>
      <div key={key} className={classes.items}>
        <div className={classes.content}>
          <p className={classes.name}>{items.name}</p>
          <div className={classes.price}>
            <p price={price}>${items.price}</p>
            <p>x{items.qty}</p>
          </div>
        </div>
        <div className={classes.qty}>
          <button onClick={() => AddToCart(items)}>+</button>
          <button onClick={() => removeFromCart(items)}>-</button>
        </div>
      </div>
    </>
  );
};
