import React from "react";
import styles from "./styles.module.css"

export function Counter(props) {
			return (
			<div className={`${styles.center} ${styles.counter}`}>{props.value}</div>
			)
		}