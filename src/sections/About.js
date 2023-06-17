import React from 'react'
import styles from './About.module.css'
import Showcase from '../components/About/Showcase'
import Gallery from '../components/About/Gallery'
import FeatureList from '../components/About/FeatureList'

const About = () => {
	return (
		<section className={`${styles.about} section`}>
			<Showcase />
			<Gallery />
			<FeatureList />
		</section>
	)
}

export default About
