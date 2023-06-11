import React from 'react'
import styles from './Features.module.css'
import feature_01 from '../../assets/images/About/Feature_01.jpeg'
import feature_02 from '../../assets/images/About/Feature_02.jpeg'
import feature_03 from '../../assets/images/About/Feature_03.jpeg'

const Features = () => {
	return (
		<div className={styles.features}>
			<h2 className={styles.title}>Satisfaction Guaranteed</h2>
			<p className={styles.subtext}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique. Duis cursus, mi quis viverra
				ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
				Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
				sem vitae risus tristique posuere.
			</p>
			<div className={styles['card-01']}>
				<a href="/" className={styles.link}>
					<div
						className={styles['card-image']}
						style={{ backgroundImage: `url(${feature_03})` }}
					/>
				</a>
				<div className={styles['card-content']}>
					<h3>Power</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.</p>
				</div>
			</div>
			<div className={styles['card-02']}>
				<a href="/" className={styles.link}>
					<div
						className={styles['card-image']}
						style={{ backgroundImage: `url(${feature_02})` }}
					/>
				</a>
				<div className={styles['card-content']}>
					<h3>Sustainability</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.</p>
				</div>
			</div>
			<div className={styles['card-03']}>
				<a href="/" className={styles.link}>
					<div
						className={styles['card-image']}
						style={{ backgroundImage: `url(${feature_01})` }}
					/>
				</a>
				<div className={styles['card-content']}>
					<h3>Tenacity</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.</p>
				</div>
			</div>
		</div>
	)
}

export default Features
