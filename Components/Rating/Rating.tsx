import React, { useId } from "react";
import { v4 as uuid } from "uuid";

import styles from "../../styles/Rating.module.scss";

export const Rating = (props: { stars: number }) => {
	const stars = new Array(props.stars).fill("");

	return (
		<div className={styles.rating}>
			<span className="visually-hidden">
				Hotel rating {props.stars} out of 5 stars
			</span>
			{stars.map((_) => (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					key={uuid()}
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="m14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z" />
				</svg>
			))}
		</div>
	);
};
