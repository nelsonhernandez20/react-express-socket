import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';

const socket = io('http://localhost:4000');

function App() {
  const [message, setmessage] = useState('')

	return (
		<div className="App">
			<form>
				<input type="text" onChange={e => console.log(e.target.value)} />
				<button>Enviar</button>
			</form>
		</div>
	);
}

export default App;
