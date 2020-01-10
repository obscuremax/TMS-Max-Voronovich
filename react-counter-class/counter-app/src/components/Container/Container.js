import React from "react";
import styles from "./styles.module.css"
import {ButtonPanel, Counter} from "../index";

export default class Container extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		}
	}

	increment = ()=> {this.setState({value: this.state.value + 1})}
	decrement = ()=> {this.setState({value: this.state.value - 1})}
	reset = ()=> {this.setState({value: 0})}

	render() {
		return (
			<div className={styles.container}>
				<Counter value={this.state.value}/>
				<ButtonPanel onClick={this}/>
			</div>
		)
	}
}