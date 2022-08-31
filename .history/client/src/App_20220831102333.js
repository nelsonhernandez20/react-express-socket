import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';

const socket = io('http://localhost:4000');

function App() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(message);
	};

	const [message, setmessage] = useState('');

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => setmessage(e.target.value)} />
				<button>Enviar</button>
			</form>
		</div>
	);
}

export default App;
