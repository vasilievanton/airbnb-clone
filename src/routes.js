import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WishlistPage from './pages/WishlistPage';
import { ABOUT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, WISHLIST_ROUTE } from './utils/consts';

export const authRoutes = [];

export const publickRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: <AboutPage />,
  },
  {
    path: WISHLIST_ROUTE,
    Component: <WishlistPage />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <LoginPage />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <RegisterPage />,
  },
];
