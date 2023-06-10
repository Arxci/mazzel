import React from 'react'
import styles from './Logos.module.css'
import logo from '../assets/images/Logos/LogoLight.png'

const Logos = () => {
	return (
		<section className={`${styles.logos} section`}>
			<div className={styles.wrapper}>
				<div className={styles['image-wrapper']}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles['image-wrapper']}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles['image-wrapper']}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles['image-wrapper']}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles['image-wrapper']}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles['image-wrapper']}>
					<img src={logo} alt="logo" />
				</div>
			</div>
		</section>
	)
}

export default Logos
