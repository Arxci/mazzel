import React from 'react'
import styles from './About.module.css'
import Showcase from '../components/About/Showcase'
import Features from '../components/About/Features'

const About = () => {
	return (
		<section className={`${styles.about} section`}>
			<Showcase />
			<Features />
		</section>
	)
}

export default About
