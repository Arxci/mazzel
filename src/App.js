import styles from './App.module.css'
import MainHeader from './components/MainHeader/MainHeader'
import Hero from './sections/Hero'
import Intro from './sections/Intro'

function App() {
	return (
		<div className={styles.root}>
			<MainHeader />
			<main>
				<Hero />
				<Intro />
			</main>
		</div>
	)
}

export default App
