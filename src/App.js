import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
	constructor(props) {
		 super(props);
	}

	render() {
		 return (
			  <Container>
					<form className="w-50 border mt-5 p-3 m-auto">
						 <div className="mb-3">
							  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
							  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
						 </div>
						 <div className="mb-3">
							  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
							  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						 </div>
					</form>
			  </Container>
		 )
	}
}

function App() {
	return (
		 <Form/>
	);
}

export default App;

// const Header = () => {
// 	return <h2>Hello world!</h2>
// }

// // const Field = () => {
// // 	const holder = 'Enter here';
// // 	const styledField = {
// // 		width: '300px'
// // 	};
// // 	return <input 
// // 		placeholder={holder}
// // 		type='text' 
// // 		style={styledField}/>
// // }

// class Field extends Component {
// 	render() {
// 		const holder = 'Enter here';
// 		const styledField = {
// 			width: '300px'
// 		}; 

// 		return <input 
// 			placeholder={holder}
// 			type='text' 
// 			style={styledField}/>
// 	}
// }

// function Btn() {
// 	const text = 'Log in';
// 	const logged = false;
	
	

// 	return <button>{text}</button>
// } 

// function App() {
//   return (
//     <div className="App">
//       <Header/>
// 		<Field/>
// 		<Btn/>
//     </div>
//   ); 
// }

// export default App; 