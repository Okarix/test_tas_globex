import Card from './Card';
import { CardModalProps, CardsProps } from '../../types';
import { useState } from 'react';
import CardModal from './CardModal';

function Cards({ data }: CardsProps) {
	const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});

	// Функция для открытия карточки
	const openCard = (email: string) => {
		setOpenCards(prevState => ({
			...prevState,
			[email]: true, // Устанавливаем состояние открытости для карточки с данным email в true
		}));
	};

	// Функция для закрытия карточки
	const closeCard = (email: string) => {
		setOpenCards(prevState => ({
			...prevState,
			[email]: false, // Устанавливаем состояние открытости для карточки с данным email в false
		}));
	};

	return (
		<>
			<main className='card_container'>
				{data.map((user: CardModalProps) => (
					<Card
						key={user.email} // добавляем уникальный ключ
						title={user.name}
						phone={user.phone}
						email={user.email}
						openCard={openCard}
					/>
				))}
			</main>
			{data.map(
				(user: CardModalProps) =>
					openCards[user.email] && (
						<CardModal
							name={user.name}
							phone={user.phone}
							email={user.email}
							hire_date={user.hire_date}
							position_name={user.position_name}
							department={user.department}
							address={user.address}
							onClose={() => closeCard(user.email)}
						/>
					)
			)}
		</>
	);
}

export default Cards;
