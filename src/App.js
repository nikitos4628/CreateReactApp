import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
	state = {
		advOpen: false
	}

	componentDidMount() {
		setTimeout(this.handleClick, 3000)
	}

	handleClick = () => {
		this.setState(({advOpen}) => ({
			advOpen: !advOpen	
		}))
	}

	render() {
		 return (
			  <Container>
					<form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" 
					style={{'overflow': 'hidden', 
							  'position': 'relative'}}>
						 <div className="mb-3">
							  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
							  <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
						 </div>
						 <div className="mb-3">
							  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
							  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						 </div>
						 {
							this.state.advOpen ?
								<Portal>
									<Msg/>
								</Portal> : null
						 }
							
					</form>
			  </Container>
		 )
	}
}

const Portal = (props) => {
	const node = document.createElement('div');
	document.body.appendChild(node);

	return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
	return (
		<div 
			style={{'width': '500px', 
				  'height': '150px', 
				  'backgroundColor': 'red', 
				  'position': 'absolute', 
				  'right': '0', 
				  'bottom': '0'}}>
			 Hello
		</div>
	)
}

function App() {
	return (
		 <Form/>
	);
}

export default App;

// class Form extends Component {
// 	// myRef = React.createRef();

// 	// componentDidMount() {
// 	// 	this.myRef.current.focus();
// 	// }

// 	setInputRef = (elem) => {
// 		this.myRef = elem;
// 	}

// 	focusFirstTI = () => {
// 		if (this.myRef) {
// 			this.myRef.focus();
// 		}
// 	}

// 	render() {
// 		 return (
// 			  <Container>
// 					<form className="w-50 border mt-5 p-3 m-auto">
// 						 <div className="mb-3">
// 							  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
// 							  <input
// 							  	ref={this.setInputRef} 
// 								type="email" 
// 								className="form-control" 
// 								id="exampleFormControlInput1" 
// 								placeholder="name@example.com"/>
// 						 </div>
// 						 <div className="mb-3">
// 							  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// 							  <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// 						 </div>
// 					</form>
// 			  </Container>
// 		 )
// 	}
// }

// class TextInput extends Component {

// 	doSmth = () => {
// 		console.log('object');
// 	}

// 	render () {
// 		return (
// 			<input
// 				ref={this.myRef} 
// 				type="email" 
// 				className="form-control" 
// 				id="exampleFormControlInput1" 
// 				placeholder="name@example.com"/>
// 		)
// 	}
// }

// function App() {
// 	return (
// 		 <Form/>
// 	);
// }

// export default App;

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