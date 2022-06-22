// function that helps us create the state
import { useState } from "react";

// function createState(state) {
//     let data = state
//     const changeState = (data) => { return data }
//     return [data,changeState]
// }

// const state = {
//     user: "yasin",
//     name: "Yasin",
//     email: "yasin@test.com"
// }

// const arr = createState(state)
// arr[0]
// arr[1]
// changeState({
// 	user: "yasin2",
// 	name: "Yasin2",
// 	email: "yasin2@test.com",
// });

function Form() {
	// create the state of the component
	const [data, setData] = useState({});

	return (
		<form
			onSubmit={(event) => {
				// prevent the default behivoir of the form
				event.preventDefault();
				console.log(data);
			}}
		>
			<input
				type='text'
				onChange={function (event) {
					// Update the name property in the state
					setData(function (data) {
						return { ...data, name: event.target.value };
					});
				}}
				placeholder='Name'
			/>
			<input
				type='email'
				onChange={function (event) {
					// Update the email property in the state
					setData(function (data) {
						return { ...data, email: event.target.value };
					});
				}}
				placeholder='Email'
			/>
			<button type='submit'>Save</button>
		</form>
	);
}

export default Form;
