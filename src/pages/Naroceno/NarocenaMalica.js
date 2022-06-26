import React from 'react';
import MeniCard from '../../components/UI/Cards/MeniCard';
import style from './NarocenaMalica.module.css';
import MalicaBtn from '../../components/UI/Buttons/MalicaBtn';
import { useNavigate } from 'react-router-dom';
import { authAction } from '../../state/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const NarocenaMalica = (props) => {
	const dispatch = useDispatch();
	const narocenaMalica = useSelector((state) => state.malica);

	const navigate = useNavigate();

	const potrdiMalicoHandler = () => {
		dispatch(authAction.logout());
		navigate('/');
	};

	return (
		<div className={style.naroceno}>
			<div className={style.narocenoTitle}>Naročena malica za danes:</div>
			<div className={style.naroceniMeni}>
				{narocenaMalica && (
					<MeniCard
						key={narocenaMalica.id}
						id={narocenaMalica.id}
						ime={narocenaMalica.ime}
						vsebina={narocenaMalica.vsebina}
						tip={narocenaMalica.tip}
					/>
				)}
			</div>
			<MalicaBtn
				text='Potrdi malico'
				potrdiMalico={potrdiMalicoHandler}
			/>
		</div>
	);
};

export default NarocenaMalica;
