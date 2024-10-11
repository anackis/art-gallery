import { useState, useEffect } from 'react';
import { ArtObject, DetailedArtObjectResponse } from '../interfaces/apiTypes';

const API_KEY = process.env.REACT_APP_API_KEY!;
const API_URL = process.env.REACT_APP_API_URL!;

export const useFetchArtDetails = (objectNumber: string) => {
	const [artDetail, setArtDetail] = useState<ArtObject | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchArtDetails = async () => {
			try {
				const response = await fetch(`${API_URL}/${objectNumber}?key=${API_KEY}`);
				const data: DetailedArtObjectResponse = await response.json();
				if (response.ok) {
					setArtDetail(data.artObject); 
					setError(null);
				} else {
					throw new Error(data.error || 'Failed to fetch details');
				}
			} catch (err: any) {
				setError(err.message);
				setArtDetail(null);
			} finally {
				setIsLoading(false);
			}
		};

		if (objectNumber) {
			fetchArtDetails();
		}
	}, [objectNumber]);

	return { artDetail, isLoading, error };
};
