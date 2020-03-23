import React from "react";
import styles from "./styles.module.css"

export function Box(props) {
	return <div className={styles.container}>{props.children}</div>
}

