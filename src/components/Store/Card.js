import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, description, image, price, id }) => {
	return (
		<div className={styles['card-' + id]}>
			<a href="/" className={styles['image-wrapper']}>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${image})` }}
				></div>
			</a>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				<h4 className={styles.price}>{price}</h4>
				<button className={styles.button} type="button">
					BUY NOW
				</button>
			</div>
		</div>
	)
}

export default Card
