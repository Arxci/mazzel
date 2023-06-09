import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
	return (
		<section className={`${styles.hero} section`}>
			<div className={styles['hero-wrapper']}>
				<h1 className={styles.heading}>
					KBO
					<span className={styles['large-x']}>X</span>
				</h1>
			</div>
			<div className={styles['background-image']}>
				<video
					autoPlay
					loop
					muted
					playsInline
					style={{
						backgroundImage:
							'url("https://assets.website-files.com/62a16e7b45387164d9b2945c/62a17e31eba3c00c62173a37_Hero trimmed-poster-00001.jpg")',
					}}
				>
					<source src="https://assets.website-files.com/62a16e7b45387164d9b2945c/62a17e31eba3c00c62173a37_Hero trimmed-transcode.mp4" />
				</video>
			</div>
		</section>
	)
}

export default Hero
