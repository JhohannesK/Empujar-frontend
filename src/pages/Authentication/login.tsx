import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Constants } from '../../Constants';
import { useMutation } from 'react-query';
import axios from 'axios';

export interface LoginFormValues {
	email: string;
	password: string;
}

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const mutation = useMutation((formData: LoginFormValues) => {
		console.log('🚀 ~ file: login.tsx:18 ~ mutation ~ formData:', formData);
		return axios
			.post(`http://localhost:8000/auth/login`, formData)
			.then((res) => {
				console.log(res);
				navigate(`${Constants.PATHS.USERHOMEPAGE}`);
			});
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData: LoginFormValues = { email, password };
		mutation.mutate(formData);
	};

	return (
		<div className='h-screen w-full flex flex-col gap-10 items-center justify-center'>
			<div className='flex items-center flex-col gap-5'>
				<p className='text-5xl font-bold'>Empujar</p>
				<p>Welcome Back to Empujar</p>
			</div>
			<div className='w-[30%]'>
				<form
					className='flex flex-col w-full gap-5'
					onSubmit={handleSubmit}
				>
					<input
						className='bg-blue-100'
						type='email'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className='bg-blue-100'
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<p
						className='text-sm text-end cursor-pointer hover:text-blue-400'
						onClick={() => navigate(`${Constants.PATHS.FORGETPASSWORD}`)}
					>
						forgot password
					</p>
					<div className='flex w-full items-center justify-center'>
						<button className='bg-blue-500 w-[14rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
							Login
						</button>
					</div>
					<div className='flex gap-5 text-[16px] justify-center'>
						<p>Don't have an account?</p>
						<p
							className='cursor-pointer'
							onClick={() => navigate(`${Constants.PATHS.REGISTER}`)}
						>
							Register
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
