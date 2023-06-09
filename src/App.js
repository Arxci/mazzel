import styles from './App.module.css'
import MainHeader from './components/MainHeader/MainHeader'
import Hero from './sections/Hero'

function App() {
	return (
		<div className={styles.root}>
			<MainHeader />
			<main>
				<Hero />
			</main>
		</div>
	)
}

export default App
