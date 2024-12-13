import { Link } from 'react-router-dom'
import styles from '../assets/styles/Homepage.module.css'

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <h1>Lorem Gaming,</h1>
            <p>
                One of the popular online 
                gaming service providers in US has recently launched a 
                new online gaming experience that customers can subscribe to 
                for access to various features
            </p>
            <aside className={styles.aside}>
                <p>Sign up to immerse yourself in the virtual reality!</p>
                <Link to="/MultiStepForm">
                    <button>Go to forms</button>
                </Link>
            </aside>
        </div>
    )
}
export default Homepage;
