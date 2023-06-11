import React from 'react'
import styles from './About.module.css'
import Showcase from '../components/About/Showcase'

const About = () => {
	return (
		<section className={`${styles.about} section`}>
			<Showcase />
		</section>
	)
}

export default About
