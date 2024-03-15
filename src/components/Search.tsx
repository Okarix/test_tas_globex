import searchIcon from '../assets/icons/search_icon.svg';
import { useState } from 'react';
import { SearchProps } from '../types';

function Search({ setSearchQuery }: SearchProps) {
	const [searchResults, setSearchResults] = useState<string>('');

	const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchResults(event.target.value);
		setSearchQuery(searchResults);
	};

	return (
		<div className='search'>
			<input
				type='text'
				className='search_input'
				value={searchResults}
				onChange={handleInputChange}
			/>
			<img
				className='search_icon'
				src={searchIcon}
				alt='search_icon'
			/>
		</div>
	);
}

export default Search;
