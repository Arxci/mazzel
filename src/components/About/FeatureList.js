import React from 'react'
import styles from './FeatureList.module.css'
import Feature from './Feature'
import feature_01 from '../../assets/images/About/Feature_01.jpeg'
import feature_02 from '../../assets/images/About/Feature_02.jpeg'
import feature_03 from '../../assets/images/About/Feature_03.jpeg'
import feature_04 from '../../assets/images/About/Feature_04.jpeg'
import feature_05 from '../../assets/images/About/Feature_05.jpeg'

const DUMMY_FEATURES = [
	{
		id: 0,
		name: 'BRAKES',
		description:
			'Brakes are the most important feature in a bicycle. Our bicycles come installed with some of the safest brakes to date. Perfect for rain and snow.',
		image: feature_01,
	},
	{
		id: 1,
		name: 'ELECTRIC',
		description:
			'Our electric bicycles are some of our most popular ones. Great for getting around a city.',
		image: feature_02,
	},
	{
		id: 2,
		name: 'SAFETY',
		description:
			'Our bicycles come with attachments for review and front lights, which makes our bicycles extremely safe for nighttime rides.',
		image: feature_03,
	},
	{
		id: 3,
		name: 'ERGONOMIC',
		description:
			'Our ergonomic designs make our bicycles comfortable for any rider under any situation.',
		image: feature_04,
	},
	{
		id: 4,
		name: 'MULTI USE',
		description:
			'Our bicycles are great for on road use and off road use, such as the grass in a park!',
		image: feature_05,
	},
]

const FeatureList = () => {
	return (
		<div className={styles.feature}>
			<h2 className={styles.title}>Features worth mentioning</h2>
			<p className={styles.description}>
				KBOX is known as the most innovative bicycle company to date. Creating
				record breaking bikes for ANY USE, ANYWHERE, ANYTIME!
			</p>
			{DUMMY_FEATURES.map((feature) => (
				<Feature
					key={feature.id}
					name={feature.name}
					description={feature.description}
					image={feature.image}
					id={feature.id}
				/>
			))}
		</div>
	)
}

export default FeatureList
