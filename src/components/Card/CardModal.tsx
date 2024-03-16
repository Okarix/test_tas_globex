import closeIcon from '../../assets/icons/close_icon.svg';
import { CardModalProps } from '../../types';

function CardModal({ name, phone, email, hire_date, position_name, department, address, onClose }: CardModalProps) {
	return (
		<>
			<div
				className='overlay'
				onClick={onClose}
			></div>
			<div className='card_modal'>
				<div className='card_modal-top'>
					<h2 className='card_modal-top_title'>{name}</h2>
					<button className='card_modal-top_close'>
						<img
							src={closeIcon}
							alt='close_icon'
							onClick={onClose}
						/>
					</button>
				</div>
				<ul className='card_modal_contacts'>
					<li className='card_modal_contacts-item'>
						<h2 className='card_modal_contacts-title'>Телефон:</h2>
						<span className='card_modal_contacts-text'>{phone}</span>
					</li>
					<li className='card_modal_contacts-item'>
						<h2 className='card_modal_contacts-title'>Почта:</h2>
						<span className='card_modal_contacts-text'>{email}</span>
					</li>
					<li className='card_modal_contacts-item'>
						<h2 className='card_modal_contacts-title'>Дата приема:</h2>
						<span className='card_modal_contacts-text'>{hire_date}</span>
					</li>
					<li className='card_modal_contacts-item'>
						<h2 className='card_modal_contacts-title'>Должность:</h2>
						<span className='card_modal_contacts-text'>{position_name}</span>
					</li>
					<li className='card_modal_contacts-item'>
						<h2 className='card_modal_contacts-title'>Подразделение:</h2>
						<span className='card_modal_contacts-text'>{department}</span>
					</li>
				</ul>
				<div className='card_modal_info'>
					<h2 className='card_modal_info-title'>Дополнительная информация:</h2>
					<p className='card_modal_info-text'>{address}</p>
				</div>
			</div>
		</>
	);
}

export default CardModal;
