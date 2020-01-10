import React from "react";
import styles from "./styles.module.css"
import Button from "../Button/Button";

export default function ButtonPanel (props){
	return 	<div className={styles.buttonsPanel}>
			<Button onClick={props.onClick.increment} styles={styles.increment} text={"+"}/>
			<Button onClick={props.onClick.reset} styles={styles.reset} text={"reset"}/>
			<Button onClick={props.onClick.decrement} styles={styles.decrement} text={"-"}/>
		</div>

}