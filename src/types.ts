export interface CardModalProps {
	name: string;
	phone: string;
	email: string;
	hire_date: string;
	position_name: string;
	department: string;
	address: string;
	onClose: () => void;
}

export interface CardProps {
	title: string;
	phone: string;
	email: string;
	openCard: Function;
}

export interface CardsProps {
	data: CardModalProps[];
}

export interface SearchProps {
	setSearchQuery: (results: string) => void;
}
