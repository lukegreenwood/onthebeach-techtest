export interface Hotel {
	name: string;
	location: string;
	rating: number;
	people: {
		adults?: number;
		children?: number;
		infants?: number;
	};
	dates: {
		date: Date;
		duration: number;
	};
	departureLocation: string;
	price: number;
	description: string;
}

export const mockHotelData: Hotel[] = [
	{
		name: "Iberostar Grand Salome",
		location: "Costa Adeje, Tenerife",
		rating: 5,
		people: {
			adults: 2,
			children: 2,
			infants: 1,
		},
		dates: {
			date: new Date("2019-07-03"),
			duration: 7,
		},
		departureLocation: "East Midlands",
		price: 1136.5,
		description:
			"The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. it is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
	},
	{
		name: "Aguamarina Golf Hotel",
		location: "Costa Adeje, Tenerife",
		rating: 4,
		people: {
			adults: 2,
			children: 1,
		},
		dates: {
			date: new Date("2019-05-27"),
			duration: 7,
		},
		departureLocation: "Liverpool",
		price: 696.8,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis, urna ac fringilla laoreet, ante dolor viverra quam, et vulputate felis nibh non nulla. In condimentum urna mi, in egestas ligula vulputate nec. Quisque ligula neque, porttitor eu quam in, hendrerit bibendum sapien. Nulla facilisi. Mauris interdum metus quis placerat convallis.",
	},
	{
		name: "Las Piramides Resort",
		location: "Cheta Adoio, Tenerife",
		rating: 3,
		people: {
			adults: 2,
			children: 2,
		},
		dates: {
			date: new Date("2019-07-03"),
			duration: 7,
		},
		departureLocation: "Manchester",
		price: 499.99,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis, urna ac fringilla laoreet, ante dolor viverra quam, et vulputate felis nibh non nulla. In condimentum urna mi, in egestas ligula vulputate nec. Quisque ligula neque, porttitor eu quam in, hendrerit bibendum sapien. Nulla facilisi. Mauris interdum metus quis placerat convallis.",
	},
];
