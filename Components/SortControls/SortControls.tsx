import React from "react";

import { Hotel } from "../../libs/mockHotelData";
import { SortButton } from "../SortButton";
import styles from "../../styles/SortControls.module.scss";
import sortButtonStyles from "../../styles/SortButton.module.scss";

interface SortControlsProps {
	hotels: Hotel[];
	setHotels: (items: Hotel[]) => void;
}

enum SortType {
	ALPHA = "alpha",
	PRICE = "price",
	STAR = "star",
}

export const SortControls = (props: SortControlsProps) => {
	const [selectedSort, setSelectedSort] = React.useState<SortType>();

	return (
		<ul className={styles.sortControlsList}>
			<li>
				<SortButton
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<path d="M12.93 2.65c-.2-.2-.51-.2-.71 0l-2.01 2.01h4.72l-2-2.01zm-.7 18.7c.2.2.51.2.71 0l1.98-1.98h-4.66l1.97 1.98zm-1.25-3.62c.6 0 1.01-.6.79-1.16L8.04 7.03c-.18-.46-.63-.76-1.12-.76-.49 0-.94.3-1.12.76l-3.74 9.53c-.22.56.19 1.16.79 1.16.35 0 .67-.22.8-.55l.71-1.9h5.11l.71 1.9c.13.34.45.56.8.56zm-6.01-4.09l1.94-5.18 1.94 5.18H4.97zm16.08 2.5h-5.33l5.72-8.29c.46-.66-.02-1.57-.82-1.57h-6.48c-.44 0-.79.36-.79.8v.01c0 .44.36.8.79.8h5.09l-5.73 8.28c-.46.66.02 1.57.82 1.57h6.72c.44 0 .79-.36.79-.79.02-.45-.34-.81-.78-.81z" />
						</svg>
					}
					onSort={() => {
						setSelectedSort(SortType.ALPHA);

						const newHotels = [...props.hotels];
						newHotels.sort((a, b) => {
							const textA = a.name.toUpperCase();
							const textB = b.name.toUpperCase();
							return textA < textB ? -1 : textA > textB ? 1 : 0;
						});

						props.setHotels(newHotels);
					}}
					className={
						selectedSort === SortType.ALPHA
							? sortButtonStyles.selected
							: undefined
					}
				>
					sort <strong>alphabetically</strong>
				</SortButton>
			</li>
			<li>
				<SortButton
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M17.21 17.61c-.47-.24-1.03-.05-1.31.4-.36.6-.97.99-1.9.99H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H13c.55 0 1-.45 1-1s-.45-1-1-1H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.2 0 2.26.61 2.89 1.53.27.4.77.59 1.22.4.6-.25.8-.99.43-1.53-.99-1.45-2.66-2.4-4.54-2.4C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H7c-.55 0-1 .45-1 1s.45 1 1 1h1.47c.08.31.13.64.13 1 0 1.9-1.29 3.11-2.06 3.66-.34.24-.54.63-.54 1.05 0 .71.58 1.29 1.29 1.29H14c1.55 0 2.95-.76 3.63-2 .28-.51.09-1.14-.42-1.39z" />
						</svg>
					}
					onSort={() => {
						setSelectedSort(SortType.PRICE);

						const newHotels = [...props.hotels];
						newHotels.sort((a, b) => {
							return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
						});

						props.setHotels(newHotels);
					}}
					className={
						selectedSort === SortType.PRICE
							? sortButtonStyles.selected
							: undefined
					}
				>
					sort by <strong>price</strong>
				</SortButton>
			</li>
			<li>
				<SortButton
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="m14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z" />
						</svg>
					}
					onSort={() => {
						setSelectedSort(SortType.STAR);

						const newHotels = [...props.hotels];
						newHotels.sort((a, b) => {
							return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
						});

						props.setHotels(newHotels);
					}}
					className={
						selectedSort === SortType.STAR
							? sortButtonStyles.selected
							: undefined
					}
				>
					sort by <strong>star rating</strong>
				</SortButton>
			</li>
		</ul>
	);
};
