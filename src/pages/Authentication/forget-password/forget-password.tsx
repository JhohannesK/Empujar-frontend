import { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import { Constants } from '../../../Constants';
import { useNavigate } from 'react-router-dom';

interface IForget {
	email: string;
}

const ForgetPassword = () => {
	const [email, setEmail] = useState('');

	const navigate = useNavigate();

	const mutation = useMutation((formData: IForget) => {
		console.log('🚀 ~ file: login.tsx:18 ~ mutation ~ formData:', formData);
		return axios
			.post(`http://localhost:8000/auth/forgot-password`, formData)
			.then((res) => {
				console.log(res);
				navigate(`${Constants.PATHS.LOGIN}`);
			});
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData: IForget = { email };
		mutation.mutate(formData);
	};
	return (
		<div className='w-full flex items-center justify-center'>
			<div className='flex flex-col gap-5 rounded-md items-center justify-center px-5 lg:w-[30%]'>
				<p className='text-3xl'>Find your account</p>
				<p className='text-2xl'>
					Please enter your email address for your account.
				</p>
				<form
					className='flex flex-col w-full gap-5'
					onSubmit={handleSubmit}
				>
					<input
						type='email'
						className='bg-blue-100 w-[20rem] outline-none'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className='flex gap-5 items-center justify-end px-10 w'>
						<button
							type='button'
							onClick={() => navigate(`${Constants.PATHS.LOGIN}`)}
							className='bg-blue-500 w-[9rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						>
							Cancel
						</button>
						<button className='bg-blue-500 w-[9rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ForgetPassword;
