import React from 'react'
import styles from './Hero.module.css'
import backgroundImage from '../assets/images/Hero/HeroPoster.jpg'
import backgroundVideo from '../assets/images/Hero/HeroVideo.mp4'
import useScrollPosition from '../hooks/useScrollPosition'

const Hero = () => {
	const scrollPosition = useScrollPosition()

	// [0, 300] -> [1, 0] map opacity from scroll position to 1 -> 0
	const oldRange = [0, 300]
	const newRange = [1, 0]
	const newValue =
		((scrollPosition - oldRange[0]) * (newRange[1] - newRange[0])) /
			(oldRange[1] - oldRange[0]) +
		newRange[0]
	const opacity = Math.min(Math.max(newValue, 0), 1)

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
						backgroundImage: `url(${backgroundImage})`,
					}}
				>
					<source src={backgroundVideo} />
				</video>
			</div>
			<div className={styles['scroll-container']} style={{ opacity: opacity }}>
				<div className={styles['scroll-wrapper']}>
					<div className={styles.scroll}>
						<div className={styles['scroll-line']} />
					</div>
					<p>Scroll Down</p>
				</div>
			</div>
		</section>
	)
}

export default Hero
