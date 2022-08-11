import React from "react";

import { Hotel, mockHotelData } from "../../libs/mockHotelData";
import styles from "../../styles/HotelList.module.scss";
import { HotelCard } from "../HotelCard";

export const HotelList = () => {
	const [hotels, setHotels] = React.useState<Hotel[]>(mockHotelData);

	return (
		<div className={styles.hotelList}>
			<aside>List</aside>
			<main>
				{hotels.map((hotel, index) => (
					<HotelCard key={index} {...hotel} />
				))}
			</main>
		</div>
	);
};
