import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BsPlusCircle, BsTrash } from 'react-icons/bs';
import style from './MeniCard.module.css';

const MeniCard = (props) => {
	const location = useLocation();

	return (
		<div className={style.meniCard}>
			<div className={style.meniCardPodatki}>
				<div className={style.meniCardPodatkiNaslov}>{props.ime}</div>
				<div className={style.meniCardPodatkiVsebina}>
					{props.vsebina.map((izdelek, i) => (
						<div key={i}>
							{izdelek}
							{i === props.vsebina.length - 1 ? '' : ','}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default React.memo(MeniCard);
