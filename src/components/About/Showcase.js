import React from 'react'
import styles from './Showcase.module.css'
import showcase_01 from '../../assets/images/About/Showcase_01.jpeg'
import showcase_02 from '../../assets/images/About/Showcase_02.jpeg'

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<h2 className={styles.title}>Lasting Performance</h2>
			<p className={styles.subtext}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique. Duis cursus, mi quis viverra
				ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
				Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
				sem vitae risus tristique posuere.
			</p>
			<a href="/" className={styles['showcase-image-wrapper-01']}>
				<div
					className={styles['showcase-image']}
					style={{ backgroundImage: `url(${showcase_01})` }}
					alt="showcase"
				/>
			</a>
			<a href="/" className={styles['showcase-image-wrapper-02']}>
				<div
					className={styles['showcase-image']}
					style={{ backgroundImage: `url(${showcase_02})` }}
					alt="showcase"
				/>
			</a>
		</div>
	)
}

export default Showcase
