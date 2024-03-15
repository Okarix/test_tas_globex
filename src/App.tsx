import { useEffect, useState } from 'react';
import Cards from './components/Card/Cards';
import Search from './components/Search';
import { CardModalProps } from './types';
import { getUsers } from './services/UsersService';

function App() {
	const [data, setData] = useState<CardModalProps[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const newData = await getUsers(searchQuery);
				setData(newData);
			} catch (error: any) {
				console.error('Ошибка при получении данных:', error.message);
			}
		};

		fetchData();
	}, [searchQuery]);

	return (
		<div className='container'>
			<Search setSearchQuery={setSearchQuery} />
			<Cards data={data} />
		</div>
	);
}

export default App;
