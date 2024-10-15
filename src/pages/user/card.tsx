import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { Iresponse } from '.';

const Card = ({ data }: { data: Iresponse }) => {
	return (
		<div className='group h-[30rem] w-[20rem] transition-all duration-300 rounded-md'>
			<div className='flex flex-col h-full w-full gap-5 mt-10 relative'>
				<img
					src={data.imageUrl}
					className='h-full w-full object-cover rounded-md transition-all duration-500 hover:translate-x-1'
					alt=''
				/>
				<div className='group-hover:flex hidden hover:bg-black hover:bg-opacity-30 transition-all duration-500 absolute items-center flex-col justify-between inset-0 h-full'>
					<div className='text-white text-md px-5 '>
						{data.description}
					</div>
					<div className='w-full px-5 flex items-center justify-between'>
						<div className='w-full flex justify-start text-white'>
							<EnvelopeIcon className='h-10 w-10  cursor-pointer' />
							{data.emailSentCount}
						</div>
						<div className='w-full flex items-center justify-end text-white'>
							<ArrowDownTrayIcon className='h-7 w-10 cursor-pointer' />
							{data.totalDownloads}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
