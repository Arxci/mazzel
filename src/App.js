import styles from './App.module.css'
import MainHeader from './components/MainHeader/MainHeader'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Logos from './sections/Logos'

function App() {
	return (
		<div className={styles.root}>
			<MainHeader />
			<main>
				<Hero />
				<Intro />
				<Logos />
			</main>
		</div>
	)
}

export default App
