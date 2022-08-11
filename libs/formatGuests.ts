import type { Guests } from "./mockHotelData";

const getNoun = (key: string, amount: number) => {
	const isMultiple = amount > 1;
	switch (key) {
		case "adults":
			return isMultiple ? "Adults" : "Adult";
		case "children":
			return isMultiple ? "children" : "child";
		case "infants":
			return isMultiple ? "infants" : "infant";
		default:
			return "";
	}
};

export const formatGuests = (guests: Guests) => {
	return Object.entries(guests).map(([key, value]) => [
		value,
		getNoun(key, value),
	]);
};
