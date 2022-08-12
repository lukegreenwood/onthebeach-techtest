import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { HotelList } from "../Components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Hotel Listing</title>
			</Head>

			<div className={styles.container}>
				<HotelList />
			</div>
		</React.Fragment>
	);
};

export default Home;
