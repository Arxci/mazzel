import React from 'react'
import styles from './Showcase.module.css'
import showcase_01 from '../../assets/images/About/Showcase_01.jpeg'
import showcase_02 from '../../assets/images/About/Showcase_02.jpeg'
import features_video from '../../assets/images/Hero/HeroVideo.mp4'
import backgroundImage from '../../assets/images/Hero/HeroPoster.jpg'

const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<h2 className={styles.title}>Lasting Performance</h2>
			<p className={styles.subtext}>
				KBOX is an evolutionary company creating innovative bicycles for casual
				and hard core bicyclists. With an ergonomic design and top of line
				technology, we have exactly what you are looking for. Our bicycles are
				long lasting and comfortable.
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
			<div className={styles['feature-video-wrapper']}>
				<div className={styles['feature-subtext']}>
					<p className="large-paragraph">
						With
						<em> top of the line </em>
						features, KBOX is the experience you are
						<em> looking for </em>
						from a bicycle
					</p>
				</div>
				<div className={styles['feature-video']}>
					<div className={styles['video-wrapper']}>
						<video
							autoPlay
							loop
							muted
							playsInline
							style={{
								backgroundImage: `url(${backgroundImage})`,
							}}
						>
							<source src={features_video} />
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Showcase
