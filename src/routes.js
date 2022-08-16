import AboutPage from './pages/AboutPage';
import FirebasePage from './pages/FirebasePage';
import ItemPage from './pages/ItemPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchImagePage from './pages/SearchImagePage';
import WishlistPage from './pages/WishlistPage';
import { ABOUT_ROUTE, FIREBASE_ROUTE, ITEMS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SEARCH_IMAGES_ROUTE, WISHLIST_ROUTE } from './utils/consts';

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
    path: ITEMS_ROUTE,
    Component: <ItemPage />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <RegisterPage />,
  },
  {
    path: SEARCH_IMAGES_ROUTE,
    Component: <SearchImagePage />,
  },
  {
    path: FIREBASE_ROUTE,
    Component: <FirebasePage />,
  },
  
  
];
