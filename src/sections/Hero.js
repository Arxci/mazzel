import React from 'react'
import styles from './Hero.module.css'
import backgroundImage from '../assets/images/Hero/HeroPoster.jpg'
import backgroundVideo from '../assets/images/Hero/HeroVideo.mp4'
import ScrollIndicator from '../components/Home/ScrollIndicator'

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
						backgroundImage: `url(${backgroundImage})`,
					}}
				>
					<source src={backgroundVideo} />
				</video>
			</div>
			<ScrollIndicator />
		</section>
	)
}

export default Hero
