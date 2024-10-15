import axios from 'axios';
import HeroImage from '../../assets/dynamic-wang-NIeeGzOThuM-unsplash.jpg';
import Card from './card';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Constants } from '@/Constants';
import { getBaseUrl } from '@/lib/utils';

export interface Iresponse {
	id: string;
	createdAt: string;
	updatedAt: string;
	fileName: string;
	title: string;
	description: string;
	senderEmail: string;
	imageUrl: string;
	totalDownloads: number;
	emailSentCount: number;
}

const UserHomePage = () => {
	const navigate = useNavigate();
	const baseUrl = getBaseUrl();
	const [data, setData] = useState<Iresponse[]>([]);
	console.log('🚀 ~ file: index.tsx:22 ~ UserHomePage ~ data:', data);

	useQuery('files', () => {
		return axios.get(`${baseUrl}files`).then((res) => setData(res.data));
	});

	return (
		<div className='flex flex-col px-10 py-6'>
			<nav className='flex items-center justify-between'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center justify-between space-x-3'>
						<Camera />
						<p className='text-3xl font-bold'>Empujar</p>
					</div>
				</div>
				<div className='flex items-center justify-between gap-3'>
					<div className='flex items-center justify-between'>
						<p className='text-2xl'>Welcome, User</p>
					</div>
					<Button onClick={() => navigate(Constants.PATHS.LOGIN)}>
						Logout
					</Button>
				</div>
			</nav>

			<div className='flex flex-col gap-5 mt-10'>
				<div className='relative'>
					<img
						src={HeroImage}
						className='h-[35rem] w-full opacity-40 rounded-xl'
						alt=''
					/>
					<div className='absolute flex flex-col gap-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
						<p className='text-5xl font-bold'>
							The best source of visual contents
						</p>
						<Input
							type='text'
							placeholder='Search file'
							className='
                   w-[40rem] h-14 rounded-xl px-5 py-2 text-xl outline-none bg-slate-300 font-bold
                  '
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap justify-center gap-8'>
				{data.map((item) => (
					<Card key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

export default UserHomePage;
