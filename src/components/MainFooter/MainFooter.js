import React from 'react'
import styles from './MainFooter.module.css'
import facebook from '../../assets/images/Footer/Facebook.png'
import linkedin from '../../assets/images/Footer/LinkedIn.png'
import twitter from '../../assets/images/Footer/Twitter.png'
import logo from '../../assets/images/Logos/LogoLight.png'

const MainFooter = () => {
	return (
		<footer className={`${styles.footer} section`}>
			<div className={styles['footer-wrapper']}>
				<div className={styles.intro}>
					<a href="/" className={styles['logo-link']}>
						<img src={logo} alt="logo" />
					</a>
					<p>
						7 Olive Street
						<br />
						New York, NY 3000
					</p>
					<div className={styles.socials}>
						<a href="/" className={styles['social-link']}>
							<img src={facebook} alt="facebook" />
						</a>
						<a href="/" className={styles['social-link']}>
							<img src={twitter} alt="twitter" />
						</a>
						<a href="/" className={styles['social-link']}>
							<img src={linkedin} alt="linkedin" />
						</a>
					</div>
				</div>
				<div className={`${styles.links} ${styles['link-01']}`}>
					<a className={styles.link} href="/">
						Home
					</a>
					<a className={styles.link} href="/">
						Other products
					</a>
					<a className={styles.link} href="/">
						Testimonials
					</a>
				</div>
				<div className={`${styles.links} ${styles['link-02']}`}>
					<a className={styles.link} href="/">
						About Us{' '}
					</a>
				</div>
				<div className={`${styles.links} ${styles['link-03']}`}>
					<a className={styles.link} href="/">
						Contact
					</a>
					<a className={styles.link} href="/">
						Shipping
					</a>
					<a className={styles.link} href="/">
						FAQs
					</a>
				</div>
			</div>
		</footer>
	)
}

export default MainFooter
