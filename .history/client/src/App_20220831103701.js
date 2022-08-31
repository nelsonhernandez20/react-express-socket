import './App.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const socket = io('http://localhost:4000');

function App() {
	const handleSubmit = (e) => {
		e.preventDefault();
		socket.emit('message', message);
	};

	useEffect(() => {
		socket.on('message', message => console.log(message));
	}, []);

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
