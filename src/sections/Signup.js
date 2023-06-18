import React from 'react'
import background from '../assets/images/Signup/Background.jpeg'
import styles from './Signup.module.css'

const Signup = () => {
	const onSubmitHandler = (e) => {
		e.preventDefault()
	}

	return (
		<section
			className={`${styles.signup} section`}
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className={styles['form-wrapper']}>
				<form onSubmit={onSubmitHandler}>
					<h2 className={styles.title}>sign up to our newsletter</h2>
					<div className={styles.inputs}>
						<input
							className={styles.input}
							type="email"
							maxLength={256}
							placeholder="Enter your email..."
						/>
						<button className={styles.button} type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Signup
