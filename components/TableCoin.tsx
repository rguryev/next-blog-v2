import React from 'react';

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

export default function TableCoin({ data }) {
	return (
		<Table>
			<TableCaption>A list of your coins.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>#</TableHead>
					<TableHead>Название</TableHead>
					<TableHead className='text-right'>Цена</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((obj) => (
					<TableRow key={obj.index}>
						<TableCell className='font-medium'>{obj.rank}</TableCell>
						<TableCell className='flex'>
							<Image src={obj.icon} width={20} height={20} alt='Coin' className='mr-2' />
							{obj.name}
						</TableCell>
						<TableCell className='text-right'>{obj.price}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
