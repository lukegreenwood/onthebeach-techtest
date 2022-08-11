import Image from "next/image";
import { format } from "date-fns";

import { Hotel } from "../../libs/mockHotelData";
import styles from "../../styles/HotelCard.module.scss";
import { Rating } from "../Rating";
import { BookButton } from "../BookButton";
import { formatGuests } from "../../libs/formatGuests";
import React from "react";

export const HotelCard = (props: Hotel) => {
	const guests = formatGuests(props.guests);

	return (
		<div className={styles.hotelCard}>
			<Image
				src={`/${props.image}`}
				alt={`Image of hotel ${props.name}`}
				width={494}
				height={277}
			/>

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
		</div>
	);
};
