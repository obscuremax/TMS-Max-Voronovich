import React from "react";
import styles from "./styles.module.css"

export function Form(props) {
	const onChangeInput = event => props.onChange(event.target.value)
	const onSubmitForm = event => {
		event.preventDefault()

	}

	const cleanInput = event => {
		props.onSubmit()
		props.onChange("")
	}

	return(
		<form onSubmit={onSubmitForm} className={styles.container}>
			<input onChange={onChangeInput} value={props.inputValue} className={styles.input}/>

			<button disabled={!props.zero} onClick={cleanInput} className={styles.button}>{props.zero? "add":"search"}</button>
		</form>
	)
}

