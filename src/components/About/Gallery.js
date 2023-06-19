import React from 'react'
import styles from './Gallery.module.css'
import gallery_01 from '../../assets/images/About/Gallery_01.jpeg'
import gallery_02 from '../../assets/images/About/Gallery_02.jpeg'
import gallery_03 from '../../assets/images/About/Gallery_03.jpeg'

const Gallery = () => {
	return (
		<div className={styles.features}>
			<h2 className={styles.title}>Satisfaction Guaranteed</h2>
			<p className={styles.subtext}>
				With over 1,000 reviews and an average 4.5 stars, KBOX guarantees
				satisfaction with every bicycle that leaves our shelves. After 30 days,
				if you're not satisfied, you can return the product with a 100% refund.
			</p>
			<div className={styles['card-01']}>
				<a href="/" className={styles.link}>
					<div
						className={styles['card-image']}
						style={{ backgroundImage: `url(${gallery_03})` }}
					/>
				</a>
				<div className={styles['card-content']}>
					<h3>Power</h3>
					<p>Designed for rough terrain and high speeds.</p>
				</div>
			</div>
			<div className={styles['card-02']}>
				<a href="/" className={styles.link}>
					<div
						className={styles['card-image']}
						style={{ backgroundImage: `url(${gallery_02})` }}
					/>
				</a>
				<div className={styles['card-content']}>
					<h3>Sustainability</h3>
					<p>Comfortable build makes it great for long rides.</p>
				</div>
			</div>
			<div className={styles['card-03']}>
				<a href="/" className={styles.link}>
					<div
						className={styles['card-image']}
						style={{ backgroundImage: `url(${gallery_01})` }}
					/>
				</a>
				<div className={styles['card-content']}>
					<h3>Ergonomic</h3>
					<p>Great for any rider, any age.</p>
				</div>
			</div>
		</div>
	)
}

export default Gallery
