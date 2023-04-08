import { useContext, useState } from "react";
import classes from "./location.module.css";
import { userContext } from "../../mainLayout/mainLayout";
import { LocationData } from "../../constant";

const Location = ({
  defaultValue,
  setDefaultValue,
  initialLocation,
  setInitialLocation,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleSelect = (item) => {
    setDefaultValue(item.price);
    setInitialLocation(item.location);
    
  };

  const { toggle, active } = useContext(userContext);
  return (
    <>
      <div className={classes.all}>
        <div>
          <div className={classes.legend}>
            <div className={classes.inputs}>
              <legend>location</legend>
              <input
                onClick={toggle}
                type="text"
                value={
                  initialLocation === ""
                    ? "Select Your Location"
                    : initialLocation
                }
              />
            </div>
          </div>
          {active && (
            <div className={classes.main}>
              {LocationData.map((item, i) => (
                <ClientLocation
                  item={item}
                  key={i}
                  handleSelect={handleSelect}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Location;

const ClientLocation = ({ handleSelect, item, i, key }) => {
  return (
    <>
      <div
        className={classes.Items}
        key={item.id}
        onClick={() =>
          handleSelect(item)
    
        }
      >
        <span>{item.location}</span>
        <span>${item.price}</span>
      </div>
    </>
  );
};
