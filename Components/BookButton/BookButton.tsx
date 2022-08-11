import styles from "../../styles/BookButton.module.scss";

export const BookButton = (props: { price: number }) => {
	const formatter = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	});

	return (
		<button className={styles.bookButton}>
			<span className={styles.label}>Book now</span>
			<span className={styles.price}>{formatter.format(props.price)}</span>
		</button>
	);
};
