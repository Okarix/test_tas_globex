import phoneIcon from '../../assets/icons/phone_icon.svg';
import emailIcon from '../../assets/icons/email_icon.svg';
import { CardProps } from '../../types';

function Card({ title, phone, email, openCard }: CardProps) {
	return (
		<div className='card'>
			<h2
				className='card_title'
				onClick={() => openCard(email)}
			>
				{title}
			</h2>
			<div className='card_item'>
				<img
					className='card_item-icon'
					src={phoneIcon}
					alt='phone_icon'
				/>
				<span className='card_item-text'>{phone}</span>
			</div>
			<div className='card_item'>
				<img
					src={emailIcon}
					alt='email_icon'
					className='card_item-icon'
				/>
				<span className='card_item-text'>{email}</span>
			</div>
		</div>
	);
}

export default Card;
