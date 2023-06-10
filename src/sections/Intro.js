import React from 'react'
import styles from './Intro.module.css'

const Intro = () => {
	return (
		<section className={`${styles.intro} section`}>
			<div className={styles.wrapper}>
				<p className="x-large-paragraph">
					Precisely created with
					<em> contemporary materials </em>
					in stealth mode & innovative features for
					<em> luxury experiences </em>
				</p>
			</div>
		</section>
	)
}

export default Intro
