'use client';

import TableCoin from '@/components/TableCoin';
import axios from 'axios';
import React from 'react';

export default function OldCurrency() {
	const [coins, setCoins] = React.useState();
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	async function fetchCoins() {
		try {
			let response = await fetch('https://api.coinstats.app/public/v1/coins?limit=10');

			const data = await response.json();

			setCoins(data.coins);
			setLoading(false);
		} catch {
			console.error('Error during fetch-request', error);
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	// async function fetchCoins() {
	// 	try {
	// 		const { data } = await axios.get(`https://api.coinstats.app/public/v1/coins?limit=10`);
	// 		setCoins(data.coins);
	// 	} catch {
	// 		setError(true);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// }

	React.useEffect(() => {
		fetchCoins();
	}, []);

	if (loading) {
		return <h3>Идет загрузка</h3>;
	}

	if (error) {
		return <h3>Ошибка при получении данных</h3>;
	}

	if (!coins) {
		return <h3>Нет данных</h3>;
	}

	return (
		<>
			<div className='container mx-auto px-4'>{<TableCoin data={coins} />}</div>
		</>
	);
}

// ednf
