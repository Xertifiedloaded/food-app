import classes from './hero.module.css'
import heroImg from '../../assets/images/hero.jpg'
const Hero = () => {
    return (
        <>
            <section>
                <div className={classes.main}>
                    <img src={heroImg} alt="" />

                </div>
                <div className={classes.hero}>
                    <h1>
                        Delicious Food, Delivered To You
                    </h1>
                    <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                </div>
            </section>

        </>
    )
}

export default Hero