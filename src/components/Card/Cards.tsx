import Card from './Card';
import { CardModalProps, CardsProps } from '../../types';

function Cards({ data }: CardsProps) {
	return (
		<>
			<main className='card_container'>
				{data.map((user: CardModalProps) => (
					<Card
						key={user.email} // добавляем уникальный ключ
						title={user.name}
						phone={user.phone}
						email={user.email}
					/>
				))}
			</main>
		</>
	);
}

export default Cards;
