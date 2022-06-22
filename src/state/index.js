import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import malicaSlice from './reducers/malicaSlice';

const store = configureStore({
	reducer: {
		malice: malicaSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
