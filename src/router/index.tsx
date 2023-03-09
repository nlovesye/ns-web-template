// import { ADMIN_USER } from "@/config";
// import { UserContext } from "@/context/UserContext";
import type { FC } from 'react';
import { useMemo } from 'react';
import { useRoutes } from 'react-router';

import { useAppSelector } from '@/store';
import { isAdminSelector } from '@/store/user/selector';

import { ROUTES } from './routes';

const adminPage = ['admin1'];

export const Router: FC = () => {
  const isAdmin = useAppSelector(isAdminSelector);

  const routes = useMemo(
    () =>
      !isAdmin
        ? ROUTES.filter(
            ({ authenticaionCode }) => !authenticaionCode || adminPage.includes(authenticaionCode),
          )
        : ROUTES,
    [isAdmin],
  );

  const routesElement = useRoutes(
    routes.map((r) => {
      const { element } = r;
      return {
        ...r,
        element,
      };
    }),
  );
  return routesElement;
};
