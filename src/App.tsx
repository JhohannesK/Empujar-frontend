import { RouterProvider } from 'react-router-dom';
import InitialScreen from './pages/auth';
import routing from './routes';

function App() {
	return (
		<>
			<RouterProvider router={routing} />
		</>
	);
}

export default App;
