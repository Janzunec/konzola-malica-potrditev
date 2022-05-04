import React from 'react';
import { Link } from 'react-router-dom';
import style from './MalicaBtn.module.css';

const MalicaBtn = (props) => {
	return (
		<button className={style.malicaBtn} onClick={props.potrdiMalico}>
			{props.text}
		</button>
	);
};

export default React.memo(MalicaBtn);
