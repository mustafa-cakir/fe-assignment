import { lazy } from 'react';
import { URL_HOMEPAGE } from '../Constants';

const Homepage = lazy(() => import('../../screens/Homepage'));

const routes = [
    {
        path: URL_HOMEPAGE,
        Component: Homepage,
    },
];

export default routes;
