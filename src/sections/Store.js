import React from 'react'
import styles from './Store.module.css'
import white from '../assets/images/Store/White.jpeg'
import black from '../assets/images/Store/Black.jpeg'
import Card from '../components/Store/Card'
import Detail from '../components/Store/Detail'

const DUMMY_ITEMS = [
	{
		id: 0,
		title: 'KBOX BLACK',
		description: 'The perfect bike for any situation.',
		price: '$1,500.00',
		image: black,
	},
	{
		id: 1,
		title: 'KBOX ELECTRIC',
		description: 'An electric bike. Great for city use.',
		price: '$2,899.00',
		image: white,
	},
]

const DUMMY_INFORMATION = [
	{
		id: 0,
		title: 'Size',
		black: '194.25”W x 7.5”D x 96”H',
		white: '194.25”W x 7.5”D x 96”H',
	},
	{
		id: 1,
		title: 'Gears',
		black: '194.25”W x 7.5”D x 96”H',
		white: '194.25”W x 7.5”D x 96”H',
	},
	{
		id: 2,
		title: 'Tires',
		black: '194.25”W x 7.5”D x 96”H',
		white: '194.25”W x 7.5”D x 96”H',
	},
]

const Store = () => {
	return (
		<section className={`${styles.store} section`}>
			<h2 className={styles.title}>Choose your bike</h2>
			{DUMMY_ITEMS.map((item) => (
				<Card
					key={item.id}
					title={item.title}
					description={item.description}
					image={item.image}
					price={item.price}
					id={item.id}
				/>
			))}
			<div className={styles.information}>
				<div className={styles['information-wrapper']}>
					{DUMMY_INFORMATION.map((item) => (
						<Detail
							key={item.id}
							title={item.title}
							white={item.white}
							black={item.black}
							id={item.id}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Store
