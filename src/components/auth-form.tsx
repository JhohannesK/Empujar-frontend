'use client';

import * as React from 'react';

import { cn, getBaseUrl } from '@/lib/utils';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Icons } from './icons';
import { Constants } from '@/Constants';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginFormValues } from '@/types';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [next, setNextStep] = React.useState(false);
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState('');
	const baseUrl = getBaseUrl();
	const navigate = useNavigate();

	const mutation = useMutation((formData: LoginFormValues) => {
		console.log('🚀 ~ file: login.tsx:18 ~ mutation ~ formData:', formData);
		return axios.post(`${baseUrl}auth/signup`, formData).then((res) => {
			console.log(res);
			navigate(`${Constants.PATHS.LOGIN}`);
		});
	});

	const handleSubmit = () => {
		const formData: LoginFormValues = { email, password };
		mutation.mutate(formData);
	};

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<form onSubmit={handleSubmit}>
				<div className='grid gap-2'>
					{!next && (
						<>
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
							</div>
							<Button
								onClick={() => setNextStep(true)}
								type='button'
								disabled={mutation.isLoading}
							>
								{mutation.isLoading && (
									<Icons.spinner className='w-4 h-4 mr-2 animate-spin' />
								)}
								Continue
							</Button>
						</>
					)}
					{next && (
						<>
							<div className='grid gap-1'>
								<Label className='' htmlFor='email'>
									Password
								</Label>
								<Input
									id='password'
									placeholder='*******'
									type='password'
									disabled={mutation.isLoading}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Label className='mt-2' htmlFor='email'>
									Confirm Password
								</Label>
								<Input
									id='confirm-password'
									placeholder='*******'
									type='password'
									disabled={mutation.isLoading}
								/>
							</div>
							<Button disabled={mutation.isLoading}>
								{mutation.isLoading && (
									<Icons.spinner className='w-4 h-4 mr-2 animate-spin' />
								)}
								Sign Up with Email
							</Button>
						</>
					)}
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
