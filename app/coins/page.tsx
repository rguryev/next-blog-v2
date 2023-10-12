'use client';

import CoinsTable from '@/components/TableCoin';
import { TestForm } from '@/components/ItemForm';

import axios from 'axios';
import { useQuery } from 'react-query';

async function fetchProducts() {
	const { data } = await axios.get('https://63fa69b9897af748dccebef2.mockapi.io/items');

	return data;
}

export default function Coins() {
	const { data, isLoading } = useQuery('products', fetchProducts);

	if (isLoading) {
		return <h3>Идет загрузка...</h3>;
	}

	if (!data) {
		return <h3>Нет данных</h3>;
	}

	return (
		<>
			<div className='flex flex-col'>
				<CoinsTable data={data} />

				<hr />

				<TestForm />
			</div>
		</>
	);
}
