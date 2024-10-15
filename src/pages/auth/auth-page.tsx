import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/auth-form';
import { useLocation } from 'react-router-dom';
import { Constants } from '@/Constants';
import { UserLoginForm } from '@/components/user-login-form';
import { Camera } from 'lucide-react';

export default function AuthenticationPage() {
	const location = useLocation();
	console.log('🚀 ~ AuthenticationPage ~ location:', location.pathname);
	return (
		<div className='h-screen'>
			<div className='md:hidden'>
				<img
					src='/examples/authentication-light.png'
					// width={1280}
					// height={843}
					alt='Authentication'
					className='block dark:hidden'
				/>
				<img
					src='/examples/authentication-dark.png'
					width={1280}
					height={843}
					alt='Authentication'
					className='hidden dark:block'
				/>
			</div>
			<div className='container relative flex-col items-center justify-center hidden h-full md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
				{location.pathname === Constants.PATHS.REGISTER ||
				location.pathname === Constants.PATHS.HOME ? (
					<a
						href={Constants.PATHS.LOGIN}
						className={cn(
							buttonVariants({ variant: 'ghost' }),
							'absolute right-4 top-4 md:right-8 md:top-8'
						)}
					>
						Login
					</a>
				) : (
					<a
						href={Constants.PATHS.REGISTER}
						className={cn(
							buttonVariants({ variant: 'ghost' }),
							'absolute right-4 top-4 md:right-8 md:top-8'
						)}
					>
						Create an account
					</a>
				)}
				<div className='relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex'>
					<div className='absolute inset-0 bg-zinc-900' />
					<div className='relative z-20 flex items-center gap-3 text-lg font-medium'>
						<Camera />
						Empujar
					</div>
					<div className='relative z-20 mt-auto'>
						<blockquote className='space-y-2'>
							<p className='text-lg'>
								&ldquo;Get access to images of any collection. Download
								and share with your peers and family.&rdquo;
							</p>
							<footer className='text-sm'>Elie Meyer</footer>
						</blockquote>
					</div>
				</div>
				<div className='lg:p-8'>
					{location.pathname === Constants.PATHS.REGISTER ||
					location.pathname === Constants.PATHS.HOME ? (
						<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
							<div className='flex flex-col space-y-2 text-center'>
								<h1 className='text-2xl font-semibold tracking-tight'>
									Create an account
								</h1>
								<p className='text-sm text-muted-foreground'>
									Enter your email below to create your account
								</p>
							</div>

							<UserAuthForm />

							<p className='px-8 text-sm text-center text-muted-foreground'>
								By clicking continue, you agree to our{' '}
								<a
									href='/terms'
									className='underline underline-offset-4 hover:text-primary'
									target='_blank'
									rel='noopener noreferrer'
								>
									Terms of Service
								</a>{' '}
								and{' '}
								<a
									href='/privacy'
									className='underline underline-offset-4 hover:text-primary'
									target='_blank'
									rel='noopener noreferrer'
								>
									Privacy Policy
								</a>
								.
							</p>
						</div>
					) : (
						<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
							<div className='flex flex-col space-y-2 text-center'>
								<h1 className='text-2xl font-semibold tracking-tight'>
									Log into Empujar
								</h1>
								<p className='text-sm text-muted-foreground'>
									Enter your credentials to login
								</p>
							</div>

							<UserLoginForm />

							<p className='px-8 text-sm text-center text-muted-foreground'>
								By clicking continue, you agree to our{' '}
								<a
									href='/terms'
									className='underline underline-offset-4 hover:text-primary'
									target='_blank'
									rel='noopener noreferrer'
								>
									Terms of Service
								</a>{' '}
								and{' '}
								<a
									href='/privacy'
									className='underline underline-offset-4 hover:text-primary'
									target='_blank'
									rel='noopener noreferrer'
								>
									Privacy Policy
								</a>
								.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
