import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

import NotFound from '@/views/404';

const Home = lazy(() => import('@/views/Home'));
const Manage = lazy(() => import('@/views/Manage'));

interface RouteObj {
  authenticaionCode?: string;
}
type RouteExtendObject = RouteObject & RouteObj;

export const ROUTES: RouteExtendObject[] = [
  {
    path: `/`,
    element: <Home />,
  },
  {
    path: `/manage`,
    element: <Manage />,
    authenticaionCode: 'admin1',
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
