import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_KEY } from '../../private/API_KEYS';
import { authAction } from '../../state/reducers/authSlice';
import style from './Prijava.module.css';

const Prijava = () => {
	const [zaposleniID, setZaposleniID] = useState('');
	const [error, setError] = useState('');

	const dispatch = useDispatch();

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
						const errorMsg = 'Uporabnik s tem ID ne obstaja!';
						setError(errorMsg);

						throw new Error(error);
					}
					if (req.status === 403) {
						const errorMsg = 'Dostop zavrnjen!';
						setError('Dostop zavrnjen!');

						// setErrorMsg(error);
						throw new Error(errorMsg);
					}
				}

				const userData = await req.json();
				// setErrorMsg('');
				dispatch(authAction.logIn(userData));
				navigate('/naroceno');
			};

			fetchData();
		} catch (err) {
			setError('Uporabnik ne obstaja');
			console.log(err);
		}
	};

	const idZaposlenegaInputHandler = (e) => {
		setZaposleniID(e.target.value);
		setError('');
	};

	return (
		<div className={style.prijava}>
			<div className={style.prijavaTitle}>Poskenirajte svojo kartico</div>
			{error !== '' && <div className={style.error}>{error}</div>}
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
