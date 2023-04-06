import { useContext, useState } from "react";
import classes from "./location.module.css";
import { userContext } from "../../mainLayout/mainLayout";
import { LocationData } from "../../constant";

const Location = ({ defaultValue, setDefaultValue }) => {
  const [clicked, setClicked] = useState(false);

  const handleSelect = (data) => {
    setDefaultValue(data.price);

    console.log(defaultValue);
  };

  const { toggle, active, setActive } = useContext(userContext);
  return (
    <>
      <div className={classes.all}>
        <div>
          <div className={classes.legend} onClick={toggle}>
            <span>location</span>
            <span>${defaultValue == "" ? "0" : defaultValue}</span>
          </div>
          {active && (
            <div className={classes.main}>
              {/* {Location.map((items, idx) => (
                <ClientLocation
                  handleSelect={() => handleSelect(items)}
                  {...items}
                  key={idx}
                  // items={items}
                />
              ))} */}

              <ClientLocation handleSelect={handleSelect} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Location;

const ClientLocation = ({ handleSelect, item }) => {
  return (
    <>
      {LocationData.map((item, i) => (
        <div
          className={classes.Items}
          key={i}
          onClick={() => handleSelect(item)}
        >
          <span>{item.location}</span>
          <span>${item.price}</span>
        </div>
      ))}
    </>
  );
};
