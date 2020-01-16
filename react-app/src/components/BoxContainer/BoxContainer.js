import React from "react";
import styles from "./styles.module.css"
import {Box} from "../Box";


export function BoxContainer(props) {

	const painBox = props.sendData.map((elem, index) => <Box key={index}>{elem}</Box>)

	return (
		<div className={styles.container}>
			{painBox}
		</div>
	)
}