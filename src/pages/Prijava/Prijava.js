import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_KEY } from '../../private/API_KEYS';
import style from './Prijava.module.css';

const Prijava = () => {
	const [zaposleniID, setZaposleniID] = useState('');

	// To keepam, če slučajno na microsoft edgu na konzoli autoFocus nebi deloval
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, [inputRef]);

	const handleOnBlur = () => {
		if (zaposleniID === '') inputRef.current.focus();
	};
	const navigate = useNavigate();

	const submitFunctionHandler = (e) => {
		e.preventDefault();
		// if (zaposleniID === '25502729') {
		// 	navigate('/naroceno');
		// }
		const inputCode = inputRef.current.value;

		try {
			const fetchData = async () => {
				const req = await fetch(
					`https://portal.mikro-polo.si/api/users?X-API-KEY=${API_KEY}&access_code=${inputCode}`,
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				if (!req.ok) {
					if (req.status === 404) {
						const error = 'Uporabnik s to kodo ne obstaja!';
						// setErrorMsg(error);
						throw new Error(error);
					}
					if (req.status === 403) {
						const error = 'Dostop zavrnjen!';
						// setErrorMsg(error);
						throw new Error(error);
					}
				}

				const userData = await req.json();
				// setErrorMsg('');
				// dispatch(authAction.logIn(userData));
				navigate('/naroceno');
			};

			fetchData();
		} catch (error) {
			console.log(error);
		}
	};

	const idZaposlenegaInputHandler = (e) => {
		setZaposleniID(e.target.value);
	};

	return (
		<div className={style.prijava}>
			<div className={style.prijavaTitle}>Poskenirajte svojo kartico</div>
			<form onSubmit={submitFunctionHandler}>
				<input
					name='ID_zaposlenega'
					type='password'
					placeholder='ID zaposlenega'
					onChange={idZaposlenegaInputHandler}
					className={style.prijavaInput}
					ref={inputRef}
					onBlur={handleOnBlur}
				/>
			</form>
		</div>
	);
};

export default Prijava;
