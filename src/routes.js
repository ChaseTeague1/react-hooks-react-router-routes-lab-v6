import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Home from './pages/Home';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
   {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: '/actors',
    element: <Actors />
   },
   {
    path: '/directors',
    element: <Directors />
   },
   {
    path: '/movie/:id',
    element: <Movie />
   }
  ];

export default routes;