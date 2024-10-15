import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

interface IResonses {
	id: string;
	createdAt: string;
	updatedAt: string;
	email: string;
	name: string | null;
	password: string;
	role: string;
	isVerified: boolean;
	resetToken: string | null;
	resetTokenExpiry: string;
}

const AdminHomePage = () => {
	const [file, setFile] = useState<File | null>(null);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const getFilenamesFromLocalStorage = () => {
		const getStoredDataAsString = localStorage.getItem('user');
		const getStoredData: IResonses = getStoredDataAsString
			? JSON.parse(getStoredDataAsString)
			: {};

		return getStoredData;
	};

	const userData = getFilenamesFromLocalStorage();

	// const navigate = useNavigate();
	interface IFormData {
		image: File;
		title: string;
		description: string;
	}

	const mutation = useMutation((formData: IFormData) => {
		console.log('🚀 ~ file: login.tsx:18 ~ mutation ~ formData:', formData);
		return axios
			.post(
				`http://localhost:8000/files/upload`,
				{ ...formData, email: userData.email },
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization:
							'Bearer ' +
							(userData.resetToken ? userData.resetToken : ''),
					},
				}
			)
			.then((res) => {
				console.log(res);
			});
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!file) {
			console.log('No file selected');
			return;
		}
		const formData = { image: file, title, description };
		mutation.mutate(formData);
	};

	const fileSelected = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedfile = event.target.files?.[0];
		if (selectedfile) {
			setFile(selectedfile);
		}
	};
	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<form
					onSubmit={handleSubmit}
					style={{ width: 650 }}
					className='flex flex-col space-y-5 px-5 py-14'
				>
					<input
						onChange={fileSelected}
						name='image'
						type='file'
						accept='image/*'
					></input>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type='text'
						placeholder='Title'
						className='bg-blue-100 rounded-md outline-none'
					></input>
					<input
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						type='text'
						placeholder='Description'
						className='bg-blue-100 rounded-md outline-none'
					></input>
					<button className='bg-blue-300' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default AdminHomePage;
