import { RouterProvider } from 'react-router-dom';
import InitialScreen from './pages/Authentication';
import routing from './routes';

function App() {
	return (
		<>
			<RouterProvider router={routing} />
		</>
	);
}

export default App;
