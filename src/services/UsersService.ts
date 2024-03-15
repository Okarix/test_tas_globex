export async function getUsers(query?: string): Promise<any> {
	const baseUrl: string = 'http://localhost:3000/';
	const url = query ? `${baseUrl}?term=${query}` : baseUrl;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Ошибка при получении данных');
		}
		const data = await response.json();
		return data;
	} catch (error: any) {
		console.error('Ошибка:', error.message);
		return [];
	}
}
