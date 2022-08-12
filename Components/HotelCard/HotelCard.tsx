/* eslint-disable @next/next/no-img-element */
import React from "react";
import { format } from "date-fns";

import { Hotel } from "../../libs/mockHotelData";
import styles from "../../styles/HotelCard.module.scss";
import { Rating } from "../Rating";
import { BookButton } from "../BookButton";
import { formatGuests } from "../../libs/formatGuests";

export const HotelCard = (props: Hotel) => {
	const [showingDescription, setShowingDescription] = React.useState(false);
	const guests = formatGuests(props.guests);

	return (
		<article className={styles.hotelCard}>
			<div className={styles.hotelImage}>
				<img src={`/${props.image}`} alt="" width={494} height={277} />
				<button
					className={styles.descriptionToggle}
					onClick={() => setShowingDescription(!showingDescription)}
				>
					<span>
						<strong>Read {showingDescription ? "less" : "more"}</strong> about
						this hotel
					</span>
					{showingDescription ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
							<path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
						</svg>
					)}
				</button>
			</div>

			<div className={styles.hotelInfo}>
				<h2 className={styles.hotelName}>{props.name}</h2>
				<div className={styles.hotelLocation}>{props.location}</div>
				<Rating stars={props.rating} />
				<div className={styles.stayInfo}>
					<p>
						{guests.map(([amount, noun], index) => (
							<React.Fragment key={index}>
								{index > 0 && (index === guests.length - 1 ? " & " : ", ")}
								<strong>{amount}</strong> {noun}
							</React.Fragment>
						))}
					</p>
					<p>
						<strong>{format(props.dates.date, "do MMMM yyyy")}</strong> for{" "}
						<strong>{props.dates.duration} days</strong>
					</p>
					<p>
						departing from <strong>{props.departureLocation}</strong>
					</p>
				</div>
				<BookButton price={props.price} />
			</div>

			{showingDescription && (
				<div className={styles.description}>
					<h3>Overview</h3>
					<p>{props.description}</p>
				</div>
			)}
		</article>
	);
};
