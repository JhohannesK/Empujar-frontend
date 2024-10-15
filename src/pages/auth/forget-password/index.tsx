import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { Constants } from '../../../Constants';

const Reset = () => {
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const path = window.location.href;
	const url = new URL(path);
	const token = new URLSearchParams(url.search).get('token');

	const mutation = useMutation(
		(formData: { password: string; token: string | null }) => {
			console.log(
				'🚀 ~ file: login.tsx:18 ~ mutation ~ formData:',
				formData
			);
			return axios
				.post(`http://localhost:8000/auth/reset-password`, formData)
				.then((res) => {
					console.log(res);
					navigate(`${Constants.PATHS.LOGIN}`);
				});
		}
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData: { password: string; token: string | null } = {
			password,
			token,
		};
		mutation.mutate(formData);
	};
	return (
		<div className='flex  w-fullitems-center justify-center'>
			<div className='flex flex-col gap-5'>
				<p className='text-center'>Enter your new password</p>
				<form onSubmit={handleSubmit} className='flex flex-col gap-5'>
					<input
						type='password'
						placeholder='Password'
						className='bg-blue-100 w-[18rem] outline-none rounded-md py-1 px-5'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Confirm password'
						className='bg-blue-100 w-[18rem] outline-none rounded-md py-1 px-5'
					/>
					<div className='flex w-full justify-center'>
						<button className='bg-blue-500 w-[9rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Reset;
