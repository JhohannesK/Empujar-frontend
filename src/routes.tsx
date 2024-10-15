import { createBrowserRouter } from 'react-router-dom';
import { Constants } from './Constants';
import UserHomePage from './pages/user/user-home-page';
import AdminHomePage from './pages/admin/admin-home-page';
import ForgetPassword from './pages/auth/forget-password/forget-password';
import Reset from './pages/auth/forget-password';
import AdminLogin from './pages/auth/adminLogin';
import AuthenticationPage from './pages/auth/auth-page';

const ROUTES = Constants.PATHS;

const routing = createBrowserRouter([
	{ path: ROUTES.HOME, element: <AuthenticationPage /> },
	{ path: ROUTES.LOGIN, element: <AuthenticationPage /> },
	{ path: ROUTES.REGISTER, element: <AuthenticationPage /> },
	{ path: ROUTES.USERHOMEPAGE, element: <UserHomePage /> },
	{ path: ROUTES.ADMINHOMEPAGE, element: <AdminHomePage /> },
	{ path: ROUTES.FORGETPASSWORD, element: <ForgetPassword /> },
	{ path: ROUTES.RESET, element: <Reset /> },
	{ path: ROUTES.ADMINLOGIN, element: <AdminLogin /> },
]);

export default routing;
