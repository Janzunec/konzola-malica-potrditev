import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import NarocenaMalica from './pages/Naroceno/NarocenaMalica';
import Prijava from './pages/Prijava/Prijava';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Prijava />} />
				<Route path='/naroceno' element={<NarocenaMalica />} />
			</Routes>
		</div>
	);
}

export default App;
