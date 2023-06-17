import React from 'react'
import styles from './FeatureList.module.css'
import Feature from './Feature'

const DUMMY_FEATURES = [
	{
		id: 0,
		name: 'FEATURE NAME',
		description: '',
		image: '',
	},
	{
		id: 1,
		name: 'FEATURE NAME',
		description: '',
		image: '',
	},
	{
		id: 2,
		name: 'FEATURE NAME',
		description: '',
		image: '',
	},
	{
		id: 3,
		name: 'FEATURE NAME',
		description: '',
		image: '',
	},
	{
		id: 4,
		name: 'FEATURE NAME',
		description: '',
		image: '',
	},
]

const FeatureList = () => {
	return (
		<div className={styles.feature}>
			<h2 className={styles.title}>Features worth mentioning</h2>
			<p className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique. Duis cursus, mi quis viverra
				ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
			</p>
			{DUMMY_FEATURES.map((feature) => (
				<Feature
					key={feature.id}
					name={feature.name}
					description={feature.description}
					image={feature.description}
					id={feature.id}
				/>
			))}
		</div>
	)
}

export default FeatureList
