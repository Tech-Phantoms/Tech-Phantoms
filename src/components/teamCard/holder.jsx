import React from 'react';
import { Box, Link,Paper } from '@material-ui/core';
import styles from './style.module.css';
import Female from '../../assets/team/_person.svg';
import Male from '../../assets/team/person.svg';
import GitHub from '../../assets/team/github_.svg';
import Linkedin from '../../assets/team/linkedin.svg';
import Instagram from '../../assets/team/instagram.svg';
import Medium from '../../assets/team/medium.svg';
const Holder = (props) => {
	const { name,imageUrl,githubUrl, linkedinUrl, gender, instagramUrl, mediumUrl } = props;
	return (
		<Box margin={{ md: '40px' }} className={styles.container}>
			<Paper
				fallbackSrc={gender === 'male' ? Male : Female}
				src={imageUrl}
				alt={name}
				className={styles.photo}
			/>
			<div className={styles.name}>{name}</div>
			{/* <Typography variant="h5">{name}</Typography> */}
			<Box className={styles.linkFlex}>
				{githubUrl && (
					<Link target="_blank" href={githubUrl}>
						<img src={GitHub} alt="GitHub" width="36px" />
					</Link>
				)}
				{linkedinUrl && (
					<Link target="_blank" href={linkedinUrl}>
						<img src={Linkedin} alt="Linkedin" width="32px" />
					</Link>
				)}
				{instagramUrl && (
					<Link target="_blank" href={instagramUrl}>
						<img src={Instagram} alt="Instagram" width="32px" />
					</Link>
				)}
				{mediumUrl && (
					<Link target="_blank" href={mediumUrl}>
						<img src={Medium} alt="Instagram" width="32px" />
					</Link>
				)}
			</Box>
		</Box>
	);
};

export default Holder;
