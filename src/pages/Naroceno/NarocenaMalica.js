import React, { useState } from 'react';
import MeniCard from '../../components/UI/Cards/MeniCard';
import style from './NarocenaMalica.module.css';
import MalicaBtn from '../../components/UI/Buttons/MalicaBtn';
import { useNavigate } from 'react-router-dom';

const MENIIJI = [
	{
		id: 1,
		ime: 'Mesni meni',
		vsebina: ['riž', 'piščanec', 'omaka', 'solata - zelena', 'pijača'],
		tip: 'mesni',
	},
	{
		id: 2,
		ime: 'Vegi meni',
		vsebina: ['krompir', 'soja', 'zelenjava', 'solata - mešana', 'pijača'],
		tip: 'vegi',
	},
	{
		id: 3,
		ime: 'Lahki meni',
		vsebina: ['Sendvič', 'Jogurt', 'Jabolko', 'pijača'],
		tip: 'lahki',
	},
	{
		id: 4,
		ime: 'Mešani meni',
		vsebina: [
			'krompir',
			'piščančji zrezek',
			'zelenjava',
			'solata - mešana',
			'pijača',
		],
		tip: 'mesani',
	},
];

const NarocenaMalica = (props) => {
	const [narocenaMalica, setNaroceneMalice] = useState(MENIIJI[0]);

	const navigate = useNavigate();

	const potrdiMalicoHandler = () => {
		navigate('/');
	};

	return (
		<div className={style.naroceno}>
			<div className={style.narocenoTitle}>Naročena malica za danes:</div>
			<div className={style.naroceniMeni}>
				<MeniCard
					key={narocenaMalica.id}
					id={narocenaMalica.id}
					ime={narocenaMalica.ime}
					vsebina={narocenaMalica.vsebina}
					tip={narocenaMalica.tip}
				/>
			</div>
			<MalicaBtn
				text='Potrdi malico'
				potrdiMalico={potrdiMalicoHandler}
			/>
		</div>
	);
};

export default NarocenaMalica;
