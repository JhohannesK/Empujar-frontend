'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Icons } from './icons';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Constants } from '@/Constants';
import { LoginFormValues } from '@/types';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState('');
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
		<div className={cn('grid gap-6', className)} {...props}>
			<form onSubmit={handleSubmit}>
				<div className='grid gap-2'>
					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='email'>
							Email
						</Label>
						<Input
							id='email'
							placeholder='name@example.com'
							type='email'
							autoCapitalize='none'
							autoComplete='email'
							autoCorrect='off'
							disabled={mutation.isLoading}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							id='password'
							placeholder='*********'
							type='password'
							autoCapitalize='none'
							autoCorrect='off'
							disabled={mutation.isLoading}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button disabled={mutation.isLoading}>
						{mutation.isLoading && (
							<Icons.spinner className='w-4 h-4 mr-2 animate-spin' />
						)}
						Sign In with Email
					</Button>
				</div>
			</form>
			<div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='px-2 bg-background text-muted-foreground'>
						Or continue with
					</span>
				</div>
			</div>
			<Button variant='outline' type='button' disabled={mutation.isLoading}>
				{mutation.isLoading ? (
					<Icons.spinner className='w-4 h-4 mr-2 animate-spin' />
				) : (
					<Icons.google className='w-4 h-4 mr-2' />
				)}
				Google
			</Button>
		</div>
	);
}
