import styles from '../assets/styles/Homepage.module.css'

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <h1>Welcome to Lorem Gaming!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consectetur odio. Nullam vel ante urna. Morbi viverra nisi at purus ultricies, in consectetur felis gravida. Aliquam et nisl a nunc scelerisque semper non vel purus.</p>
            <aside className={styles.aside}>
                <p>Sign up to immerse yourself in the virtual reality!</p>
                <button>Go to forms</button>
            </aside>
        </div>
    )
}

export default Homepage;