import {useState} from 'react';
import './App.css';
import Form from './Form';
import dataContext from './context';

const {Provider} = dataContext;

function App() {
	const [data, setData] = useState({
		mail: "name@example.com",
		text: 'some text',
		forceChangeMail: forceChangeMail 
	});

	function forceChangeMail() {
		setData({...data, mail: 'kupaj@mail.ru'})
	}

	return (
		<Provider value={data}>
			<Form text={data.text}/>
			<button 
					onClick={() => setData({
					...data,
					mail: "second@example.com",
					text: 'another text'
					})}>
					Click me
			</button>
		</Provider>
	);
}

export default App;

// class InputComponent extends Component {

// 	static contextType = dataContext;

// 	render () {
// 		return (
// 			// <Consumer>
// 			// 	{
// 			// 		value => {
// 			// 			return (
// 			// 				<input 
// 			// 				value={value.mail} 
// 			// 				type="email" 
// 			// 				className='form-control' 
// 			// 				placeholder="name@example.com"/>
// 			// 			)
// 			// 		}
// 			// 	}
// 			// </Consumer>
// 			<input 
// 				value={this.context.mail} 
// 				type="email" 
// 				className='form-control' 
// 				placeholder="name@example.com"/>
// 		)
// 	}
// }