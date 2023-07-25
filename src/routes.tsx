import { createBrowserRouter } from 'react-router-dom';
import { Constants } from './Constants';
import InitialScreen from './pages/Authentication';
import Login from './pages/Authentication/login';
import Signup from './pages/Authentication/Signup';
import UserHomePage from './pages/user';
import AdminHomePage from './pages/admin';
import ForgetPassword from './pages/Authentication/forget-password/forget-password';
import Reset from './pages/Authentication/forget-password';
import AdminLogin from './pages/Authentication/adminLogin';

const ROUTES = Constants.PATHS;

const routing = createBrowserRouter([
	{ path: ROUTES.HOME, element: <InitialScreen /> },
	{ path: ROUTES.LOGIN, element: <Login /> },
	{ path: ROUTES.REGISTER, element: <Signup /> },
	{ path: ROUTES.USERHOMEPAGE, element: <UserHomePage /> },
	{ path: ROUTES.ADMINHOMEPAGE, element: <AdminHomePage /> },
	{ path: ROUTES.FORGETPASSWORD, element: <ForgetPassword /> },
	{ path: ROUTES.RESET, element: <Reset /> },
	{ path: ROUTES.ADMINLOGIN, element: <AdminLogin /> },
]);

export default routing;
