import { useState } from 'react';
import { ArtObject, APIResponse } from '../interfaces/apiTypes';
import { Params } from '../interfaces/apiParams';

const API_KEY = process.env.REACT_APP_API_KEY!;
const API_URL = process.env.REACT_APP_API_URL!;

export const useRijksmuseum = () => {
	const [data, setData] = useState<ArtObject[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = async (params: Params = {}) => {
		const queryParams = new URLSearchParams({
			...Object.fromEntries(Object.entries(params).map(([key, val]) => [key, val.toString()])),
			key: API_KEY,
			format: 'json',
			imgonly: 'true',
			culture: 'en'
		}).toString();

		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`${API_URL}?${queryParams}`);
			const jsonData: APIResponse = await response.json();
			setData(jsonData.artObjects);
		} catch (error: any) {
			setError(error);
			setData(null);
		} finally {
			setIsLoading(false);
		}
	};

	return { data, isLoading, error, fetchData };
};
