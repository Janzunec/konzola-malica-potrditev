import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import NarocenaMalica from './pages/Naroceno/NarocenaMalica';
import OdpovedMalice from './pages/Odpoved/OdpovedMalice';
import Prijava from './pages/Prijava/Prijava';
import NarociloMalice from './pages/Narocilo/NarociloMalice';
import { useState, useEffect, useContext } from 'react';
import MaliceContext from './context/malice-context';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Prijava />} />
				<Route path='/naroceno' element={<NarocenaMalica />} />
				<Route path='/narocilo' element={<NarociloMalice />} />
				<Route path='/odpoved' element={<OdpovedMalice />} />
			</Routes>
		</div>
	);
}

export default App;
