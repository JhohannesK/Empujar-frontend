import { useNavigate } from 'react-router-dom';
import { Constants } from '../../Constants';

const InitialScreen = () => {
	const navigate = useNavigate();
	return (
		<div className='h-screen w-full flex flex-col gap-10 items-center justify-center'>
			<div className='flex flex-col gap-5 items-center'>
				<p className='text-7xl  font-extrabold'>Empujar</p>
				<p className='text-3xl'>File Server</p>
				{/* <p className='text-5xl'>Welcome to Empujar</p> */}
				<p className='text-2xl'>Get in and enjoy all files</p>
			</div>

			<div className='flex space-x-5 items-center '>
				<button
					className='bg-blue-500 w-[14rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => navigate(`${Constants.PATHS.LOGIN}`)}
				>
					Login
				</button>
				<button className='bg-blue-500 w-[14rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Register
				</button>
			</div>
		</div>
	);
};

export default InitialScreen;
