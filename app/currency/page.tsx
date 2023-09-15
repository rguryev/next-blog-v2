'use client';

import TableCoin from '@/components/TableCoin';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

async function fetchCoins() {
	const { data } = await axios.get(`https://api.coinstats.app/public/v1/coins?limit=10`);

	return data.coins;
}

export default function OldCurrency() {
	const { data, isLoading, isError } = useQuery('coins', fetchCoins);

	if (isLoading) {
		return <h3>Идет загрузка</h3>;
	}

	if (isError) {
		return <h3>Ошибка при получении данных</h3>;
	}

	if (!data) {
		return <h3>Нет данных</h3>;
	}

	return (
		<>
			<div className='container mx-auto px-4'>{<TableCoin data={data} />}</div>
		</>
	);
}
