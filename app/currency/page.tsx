'use client';

import CoinsTable from '@/components/TableCoin';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

async function fetchCoins(skip: any) {
	const { data } = await axios.get(
		`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`,
	);

	return data.coins;
}

export default function Currency() {
	const [page, setPage] = React.useState(0);
	const { data, isLoading, isError } = useQuery(['coins', page], () => fetchCoins(page), {
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	});

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
			<div className='flex flex-col items-center w-screen'>
				<div className='container mx-auto px-4 pb-4'>{<CoinsTable data={data} />}</div>
				<div className='flex justify-center max-w-md gap-2'>
					<Button onClick={() => setPage((page) => page - 10)} disabled={!page}>
						Назад
					</Button>
					<Button onClick={() => setPage((page) => page + 10)}>Вперед</Button>
				</div>
			</div>
		</>
	);
}
