import styles from './App.module.css'
import MainHeader from './components/MainHeader/MainHeader'
import About from './sections/About'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Logos from './sections/Logos'
import Signup from './sections/Signup'
import Store from './sections/Store'

function App() {
	return (
		<div className={styles.root}>
			<MainHeader />
			<main>
				<Hero />
				<Intro />
				<Logos />
				<About />
				<Store />
				<Signup />
			</main>
		</div>
	)
}

export default App
