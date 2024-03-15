import phoneIcon from '../assets/icons/phone_icon.svg';
import emailIcon from '../assets/icons/email_icon.svg';

interface CardProps {
	title: string;
	phone: string;
	email: string;
}

function Card({ title, phone, email }: CardProps) {
	return (
		<div className='card'>
			<h2 className='card_title'>{title}</h2>
			<div className='card_phone'>
				<img
					className='card_phone-icon'
					src={phoneIcon}
					alt='phone_icon'
				/>
				<span>{phone}</span>
			</div>
			<div className='card_email'>
				<img
					src={emailIcon}
					alt='email_icon'
					className='card_email-icon'
				/>
				<span>{email}</span>
			</div>
		</div>
	);
}

export default Card;
