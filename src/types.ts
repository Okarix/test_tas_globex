export interface CardModalProps {
	name: string;
	phone: string;
	email: string;
	hireDate: string;
	position: string;
	department: string;
	address: string;
	onClose: () => void;
}

export interface CardProps {
	title: string;
	phone: string;
	email: string;
	// onClick: () => void;
}

export interface CardsProps {
	data: CardModalProps[];
}

export interface SearchProps {
	setSearchQuery: (results: string) => void;
}
