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
		name: 'FEATURE NAME',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.',
		image: feature_01,
	},
	{
		id: 1,
		name: 'FEATURE NAME',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.',
		image: feature_02,
	},
	{
		id: 2,
		name: 'FEATURE NAME',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.',
		image: feature_03,
	},
	{
		id: 3,
		name: 'FEATURE NAME',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.',
		image: feature_04,
	},
	{
		id: 4,
		name: 'FEATURE NAME',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.',
		image: feature_05,
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
					image={feature.image}
					id={feature.id}
				/>
			))}
		</div>
	)
}

export default FeatureList
