import { useContext, useState } from 'react'
import classes from './location.module.css'
import { userContext } from '../../mainLayout/mainLayout'

const Location = () => {
    const [clicked, setClicked] = useState(false)
   
    const {
        Location,
        toggle,
        active,
        setActive } = useContext(userContext)
    return (
        <>

            <div className={classes.all}>
                <div>
                    <div className={classes.legend} onClick={toggle}>
                        <span >
                            location
                        </span>
                        <span>
                          
                        </span>
                    </div>
                    {
                        active && (
                            <div className={classes.main}>
                                {
                                    Location.map((items, idx) => (
                                        <ClientLocation  toggle={toggle} {...items} key={idx} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}
export default Location
const ClientLocation = ({ price, location, toggle,  }) => {
    return (
        <>

            <div className={classes.Items} onClick={toggle}>
                <span>{location}</span>
                <span>${price}</span>
            </div>

        </>
    )
}