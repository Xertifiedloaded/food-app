import Card from '../components/card/card'
import Hero from '../components/hero/hero'
import classes from './landing.module.css'

const Landing = () => {
    return (
        <>
            <div className={classes.main}>
                <Hero />
                <Card />
            </div>
        </>
    )
}

export default Landing