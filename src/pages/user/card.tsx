import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { Iresponse } from './user-home-page';

const Card = ({ data }: { data: Iresponse }) => {
	return (
		<div className='group h-[30rem] w-[20rem] transition-all duration-300 rounded-md'>
			<div className='relative flex flex-col w-full h-full gap-5 mt-10'>
				<img
					src={data.imageUrl}
					className='object-cover w-full h-full transition-all duration-500 rounded-md hover:translate-x-1'
					alt=''
				/>
				<div className='absolute inset-0 flex-col items-center justify-between hidden h-full transition-all duration-500 group-hover:flex hover:bg-black hover:bg-opacity-30'>
					<div className='px-5 text-white text-md '>
						{data.description}
					</div>
					<div className='flex items-center justify-between w-full px-5'>
						<div className='flex justify-start w-full text-white'>
							<EnvelopeIcon className='w-10 h-10 cursor-pointer' />
							{data.emailSentCount}
						</div>
						<div className='flex items-center justify-end w-full text-white'>
							<ArrowDownTrayIcon className='w-10 cursor-pointer h-7' />
							{data.totalDownloads}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
