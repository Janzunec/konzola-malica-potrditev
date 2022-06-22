import { createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../private/API_KEYS';

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

const initialStateMalice = {
	malica: undefined,
};

const malicaSlice = createSlice({
	name: 'malice',
	initialState: initialStateMalice,
	reducers: {
		setMalice(state, action) {
			state.malica = action.payload.malica;
		},
	},
});

export const fetchMalice = (username) => {
	return async (dispatch) => {
		try {
			const req = await fetch(
				`https://portal.mikro-polo.si/api/check_meal_reservation_for_user?X-API-KEY=${API_KEY}&username=${username}&menu_item_id=1`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = await req.json().then((data) => data);
			console.log(data);
			if (data) dispatch(malicaActions.setMalice(data));
		} catch (error) {
			console.log(error);
		}
	};
};

// const chooseRandomMalica = () => {
// 	const randomId = Math.floor(Math.random() * 4 + 1);
// 	const malica = MENIIJI.find((meni) => meni.id === randomId);
// 	const malicaTransformed = {
// 		...malica,
// 		datum: new Date().toISOString(),
// 	};
// 	return malicaTransformed;
// };

// export const fetchNarocenaMalica = () => {
// 	return (dispatch) => {
// 		const fetchedMalice = [chooseRandomMalica()];
// 		dispatch(
// 			maliceActions.setNarocenaMalica({
// 				naroceno: fetchedMalice,
// 			})
// 		);
// 		return;
// 	};
// };

export const malicaActions = malicaSlice.actions;

export default malicaSlice;
